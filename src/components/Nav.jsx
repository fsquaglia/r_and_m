import SearchBar from './SearchBar.jsx';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Nav(props) {


    return (
       <div>
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
                <span> </span>
            <NavLink to="/ViewAbout">
                <button>About</button>
            </NavLink>
                <span> </span>
            <button onClick={props.onClick}>Logout</button>

           <SearchBar onSearch={props.onSearch} />
           
       </div>
    );
 }
 
 export default Nav;