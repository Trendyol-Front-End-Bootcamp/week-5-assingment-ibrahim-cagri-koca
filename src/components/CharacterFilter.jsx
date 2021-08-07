import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import Filter from './Filter.jsx';
import Header from './Header';
import axios from 'axios';
import PageControlButtons from './PageControlButtons';

export const fetchAllCharacters = (callback, url) => {
    axios.get(url).then(response => callback(response.data));
}

const CharacterFilter = () => {
  const [apiUrl, setApiUrl] = useState("https://rickandmortyapi.com/api/character");  
  const [allCharacters, setAllCharacters] = useState({});
  
    useEffect(() => {
        fetchAllCharacters((characters) => {
            setAllCharacters(characters);
        }, apiUrl)
    }, [apiUrl]);
    
  
    return (        
       <div className="character-card-container">
            <Header/>
            <Filter setApiUrl={setApiUrl}/>  
            {allCharacters.error ? <h1>{allCharacters.error}</h1> : <>
                {allCharacters.results && allCharacters.results.map((character) => {
                    return <CharacterCard character= {character}/>
            })}         
            <div >
                <PageControlButtons allCharacters={allCharacters} setApiUrl={setApiUrl}/>
            </div>
        </>}
       </div>
    )
}

export default CharacterFilter;