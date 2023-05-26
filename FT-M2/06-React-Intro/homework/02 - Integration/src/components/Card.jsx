export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <p>{props.name}</p>
         <p>{props.status}</p>
         <p>{props.species}</p>
         <p>{props.gender}</p>
         <p>{props.origin}</p>
         <img src={props.image} alt={`Imagen de ${props.name}`} />
      </div>
   );
}
