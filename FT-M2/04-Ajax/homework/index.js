const mostrarAmigos = (res) => {
  const [lista] = $('#lista')
  lista.innerText = ''
  res.forEach(element => {
    const li = document.createElement('li')
    li.innerText = element.name
    lista.appendChild(li)
  });
};  

const [verAmigos] = $('#boton')

const pedirAmigos = () => {
  $.get('http://localhost:5000/amigos', mostrarAmigos)
}

verAmigos.addEventListener('click', pedirAmigos)


const buscarAmigoID = () => {
  const [id] = $('#input')
  
  $.get(`http://localhost:5000/amigos/${id.value}`, (res) => {
    const [amigo] = $('#amigo')
    amigo.innerText = res.name
  });
} 

const [search] = $('#search')

search.addEventListener('click', buscarAmigoID)



const eliminarAmigoID = () => {
  const [id] = $('#inputDelete')

  $.ajax({
    type: 'DELETE',
    url: `http://localhost:5000/amigos/${id.value}`,
    success: (res) => mostrarAmigos(res)
  })

  const [success] = $('#success')
  success.innerText = 'Tu amigo fue borrado con éxito'
}

const [botonDelete] = $('#delete')

botonDelete.addEventListener('click', eliminarAmigoID)