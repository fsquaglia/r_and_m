import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ViewAbout from "./components/ViewAbout";
import Detail from "./components/Detail";
import Error from "./components/Error";
import Home from "./components/Home";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
import Nav from "./components/Nav";
import { useSelector } from "react-redux";

function App() {
  //aquí voy a ir guardando los personajes que descargo de la API
  const [characters, setCharacters] = useState([]);

  async function onSearch(id) {
    //si no colocamos un numero para buscar card no hacer nada
    if (!id) {
      window.alert("Ingresa un id!");
      return;
    }

    if (id > 826) {
      //si la card es mayor a 826 mostrar alert
      window.alert("La card debe ser de 1 a 826");
    } else {
      if (cardDisplay(id)) {
        //comprobar si la card ya esta mostrada
        window.alert("Card ya mostrada: " + id);
      } else {
        //antigua https://rickandmortyapi.com/api/character/${id}

        try {
          const { data } = await axios(
            `http://localhost:3001/rickandmorty/character/${id}`
          );

          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        } catch (error) {
          window.alert(`Error: ${error}`);
        }
      }
    }
  }

  function cardDisplay(identificador) {
    //devuelve true or false si el personaje esta mostrado en pantalla
    let result = false;
    for (let index = 0; index < characters.length; index++) {
      if (characters[index].id === Number(identificador)) result = true;
    }
    return result;
  }

  function onClose(id) {
    const arrayFilter = characters.filter((person) => person.id !== Number(id));
    setCharacters(arrayFilter);
  }

  //loguearse, fn login se pasará por props al componente Form
  // let EMAIL = "fernandosquaglia@gmail.com"
  // let PASSWORD = "mi.pass"
  const [access, setAcces] = useState(false);
  const navigate = useNavigate();

  //antes de express
  // function login (userData){
  //    if (userData.email === EMAIL && userData.password === PASSWORD) {
  //       setAcces (true);
  //       navigate('/home')
  //    } else {
  //       alert("Datos incorrectos")
  //    };
  // };

  //con express
  async function login(userData) {
    try {
      const { email, password } = userData;

      const URL = "http://localhost:3001/rickandmorty/login/";
      const data = await axios(URL + `?email=${email}&password=${password}`);
      if (data.data.access) {
        setAcces(true);
        navigate("/home");
      } else {
        window.alert("Credenciales inválidas");
      }
    } catch (error) {
      window.alert("Acceso denegado");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //logout que se pasa por props al componente Nav
  function logout() {
    setAcces(false);
    navigate("/");
  }

  const navShow = useSelector((state) => state.navShow);

  //return del componente principal
  return (
    <div className="App" style={{ backgroundColor: "#272b33" }}>
      {useLocation().pathname !== "/" && navShow ? (
        <Nav onSearch={onSearch} onClick={logout} />
      ) : null}

      <Routes>
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/viewAbout" element={<ViewAbout />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
