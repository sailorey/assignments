import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Pokedex from "./Components/pokedex";
import Mypokemon from "./Components/mypokemon";
import Main from "./Components/Main"
import './index.css';


function App() {

  return (
    <Router>
        <header id="grid-container1">
          <nav className={["HeaderNav", "header"]} id="menu">
            <ul>
            <li><Link to="/Mypokemon">Pokemon News</Link></li>
            <li><Link to="/">All Pokemon</Link></li>
            <li><Link to="/Pokedex">Pokedex:</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/Mypokemon" element={<Mypokemon />}/>
          <Route path="/" element={<Main />}/>
          <Route path="/Pokedex" element={<Pokedex />}/>
        </Routes>
        
    </Router>
    
  );
}

export default App;