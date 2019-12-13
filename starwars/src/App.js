import React, { useState, useEffect } from 'react';
import axios from "axios";
import { CharacterCard } from "./components/CharacterCard";
import './App.css';
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
    .then(response => {
      console.log(`Axios.get.then: `, response.data.results);
      // const characterData = Object.values(response.data);
      // console.log(`CharacterData: `, characterData);
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log(`You failed. Here's why: `, error);
    })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <CardContainer>
          {characters.map(character => {
            return (
              <CharacterCard
                props={character}
                name={character.name}
                birth_year={character.birth_year}
                gender={character.gender}
                height={character.height}
                mass={character.mass}
                />
            )
          })}
        </CardContainer>
    </div>
  )
}

export default App;
