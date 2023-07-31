import SearchBar from './SearchBar.jsx';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Nav(props) {


    return (
       <div>
            <NavLink to="/">
                <button>Home</button>
            </NavLink>
            
            <NavLink to="/ViewAbout">
                <button>About</button>
            </NavLink>

           <SearchBar onSearch={props.onSearch} />
           
       </div>
    );
 }
 
 export default Nav;