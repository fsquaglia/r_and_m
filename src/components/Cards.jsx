import Card from './Card';

export default function Cards(props) {
   return <div>
      {props.characters.map ((elem, item  ) => {
         return <Card 
         key={item}
         id={elem.id}
         name={elem.name}
         status={elem.status} 
         species={elem.species}
         gender={elem.gender}
         origin={elem.origin}
         onClose={props.onClose}
         image={elem.image}
         />
         })}
   </div>
}
