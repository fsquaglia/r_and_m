import SearchBar from './SearchBar.jsx';

function Nav(props) {


    return (
       <div>
           <SearchBar onSearch={props.onSearch} />
       </div>
    );
 }
 
 export default Nav;