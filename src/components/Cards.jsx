import Card from './Card';
import { styled } from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-around; 
  margin:0px -10px;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  background-color: #272b33;
`;
export default function Cards(props) {
   return <NavContainer>
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
   </NavContainer>
}
