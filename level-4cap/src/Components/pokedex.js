import React,{ useEffect, useState } from "react";
import PokemonThumbnail from "./PokemonThumbnail";
import '../Components/pokedex1.css';
import axios from "axios";


const App = () => {
    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");
  
    const handleChange = (e) => {
      setPokemon(e.target.value.toLowerCase());
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      getPokemon();
    };
    const getPokemon = async () => {
      const toArray = [];
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const res = await axios.get(url);
        toArray.push(res.data);
        setPokemonType(res.data.types[0].type.name);
        setPokemonData(toArray);
      } catch (e) {
        console.log(e);
      }
    };
    console.log(pokemonData);
  
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <label>
            <div className="divTable1">
            <input
              type="text"
              onChange={handleChange}
              placeholder="enter pokemon name"
            /></div>
          </label>
        </form>

        
<div className="divTable">
         <div className="divTableAll">
            {pokemonData.map((pokemon,index)=> 
                   <PokemonThumbnail
                    id = {pokemon.id}
                    name = {pokemon.name}
                    image = {pokemon.sprites.other.dream_world.front_default}
                    type={pokemon.types[0].type.name}
                    key={index}
                    height = {pokemon.height}
                    weight = {pokemon.weight}
                    stat1 = {pokemon.stats[0].stat.name}
                    stat2 = {pokemon.stats[1].stat.name}
                    stat3 = {pokemon.stats[2].stat.name}
                    stat4 = {pokemon.stats[3].stat.name}
                    stat5 = {pokemon.stats[4].stat.name}
                    stat6 = {pokemon.stats[5].stat.name}
                    bs1 = {pokemon.stats[0].base_stat}
                    bs2 = {pokemon.stats[1].base_stat}
                    bs3 = {pokemon.stats[2].base_stat}
                    bs4 = {pokemon.stats[3].base_stat}
                    bs5 = {pokemon.stats[4].base_stat}
                    bs6 = {pokemon.stats[5].base_stat}
                    
                   />
              )}
         </div>
</div>
      </div>
    );
  };
  
  export default App;
