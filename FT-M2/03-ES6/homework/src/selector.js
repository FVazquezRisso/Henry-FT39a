var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  if (matchFunc(startEl)) resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) {
    let temp = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...temp]
  }
  
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === '.') return 'class'
  if (selector[0] === '#') return 'id'
  if (selector.includes('.')) return 'tag.class'
  return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 

    matchFunction = e => `#${e.id}` === selector
   
  } else if (selectorType === "class") {

    matchFunction = (e) => e.classList.contains(selector.slice(1))
    
  } else if (selectorType === "tag.class") {

    matchFunction = (e) => {
      const [tag, className] = selector.split('.')

      return matchFunctionMaker(tag)(e) && matchFunctionMaker(`.${className}`)(e)
     }
    
  } else if (selectorType === "tag") {

    matchFunction = (e) => e.tagName === selector.toUpperCase();
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
