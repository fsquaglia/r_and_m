import { Link } from "react-router-dom";

export default function Card(props) {

 

   return (
      <div>
         <hr />
         <button onClick={()=>props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2>Name: {props.id + " - " + props.name}</h2>
         </Link>

         <h2>Satus: {props.status}</h2>
         <h2>Specie: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>Origin: {props.origin.name}</h2>
         <img src={props.image} alt='' />
         <hr />
      </div>
   );
}


