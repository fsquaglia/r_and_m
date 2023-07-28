export default function Card(props) {
   return (
      <div>
         <hr />
         <button onClick={()=>props.onClose(props.id)}>X</button>
         <h2>Name: {props.name}</h2>
         <h2>Satus: {props.status}</h2>
         <h2>Specie: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>Origin: {props.origin.name}</h2>
         <img src={props.image} alt='' />
         <hr />
      </div>
   );
}
