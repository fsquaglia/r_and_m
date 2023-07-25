import Card from './Card';

export default function Cards(props) {
   return <div>
      {props.characters.map ((elem)=>{
         return <Card 
         key={elem.id}
         name={elem.name}
         status={elem.status} 
         species={elem.species}
         gender={elem.gender}
         origin={elem.origin}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         image={elem.image}
         />
      })}
   </div>;
}
