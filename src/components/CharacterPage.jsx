import { useHistory, useParams } from "react-router";
import { useEffect, useState } from 'react';
import Header from "./Header";
import axios from "axios";

const CharacterPage = () => {
    const history = useHistory();
    const backToHome = () => {
        history.push("/")
    }

    const {id} = useParams();
    const apiUrl = "https://rickandmortyapi.com/api/character/" + id;
    const fetchCharacter = (callback, url) => {
        axios.get(url).then(response => callback(response.data)); 
    }

    const [character, setCharacter] = useState({});
    const [episodes, setEpisodes] = useState([]);
  
    useEffect(() => {
        fetchCharacter((character) => {
            setCharacter(character);
        }, apiUrl)
    }, []);

    useEffect (() => {
        if (character.episode) {
            let episodeNumbers = character.episode.slice(Math.max(character.episode.length - 5, 0))
                                                  .map(link => link.split('/').pop());
            axios.get("https://rickandmortyapi.com/api/episode/" + episodeNumbers.toString())           
            .then((response) => {
                if (response.data) {
                    Array.isArray(response.data) ? setEpisodes(response.data) : setEpisodes([response.data])
                }
            }); 
        }
    }, [character])
    return (
        <div className="character-page-container">
            <Header/>
            <div className="character-page-details">
                <img src={character.image} alt="character image" />
                <div>
                    <h2>{character.name}</h2><hr />
                    <p>{character.status} - {character.species}</p><hr />
                    <p>Origin Location: <strong> {character.origin && character.origin.name}</strong></p><hr />
                    <p>Current Location: <strong>{character.location && character.location.name}</strong></p><hr />
                    <p>Last episodes: {episodes.map(episode => <p><strong>{episode.name}</strong></p> )}</p>
                    <button onClick={backToHome} >Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default CharacterPage