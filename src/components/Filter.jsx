import { useState } from "react";
import React from "react";

const genders = ["female", "male", "genderless", "unknown"];
const species = ["human", "alien", "humanoid", "poopybutthole", "mythological-creature", "animal", "robot", "disease", "unknown"];
const statuses = ["alive", "dead", "unknown"];

export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const setName = (name, _filters, _setFilters) => {
    _setFilters({..._filters, name: name})
}

export const setGender = (gender, _filters, _setFilters) => {
    _setFilters({..._filters, gender: gender})
}

export const setStatus = (status, _filters, _setFilters) => {
    _setFilters({..._filters, status: status})
}

export const setSpecies = (species, _filters, _setFilters) => {
    _setFilters({..._filters, species: species})
}

export const resetFilters = (_setFilters, _setApiUrl) => {
    _setFilters({});
    _setApiUrl("https://rickandmortyapi.com/api/character");
}

export const createFilterUrl = (_filters) => {
    let queryString = Object.entries(_filters).map(([key, value]) => ("" + key + '=' + value)).join('&');
    return `https://rickandmortyapi.com/api/character/?${queryString}`;
}

const Filter = ({setApiUrl}) => {  
    const [filters, setFilters] = useState({}); 

    return (
        <div className="filter-container">
            <input 
                id="filter-search-bar" type="search" 
                placeholder="Write your characters name" 
                className="filter-search-bar" 
                onChange={(e) => setName(e.target.value, filters, setFilters)}
                value={filters.name || ""}
                data-testid={"filter-search-bar"}
            />
            <ul className="filter-titles">
                <li>
                    <h4>Gender</h4>
                    <ul className="sub-filters gender">
                        {genders.map((tag) => (
                            <li key={tag} onClick={() => setGender(tag, filters, setFilters)} data-testid={`gender-${tag}`}>
                                <input type="radio" readOnly name="gender" id={`${tag}-gender`} value={tag} checked={filters.gender === tag} />
                                <label htmlFor={`${tag}-gender`}>{capitalize(tag)}</label>
                            </li>)
                        )}
                    </ul>
                </li>
                <li>
                    <h4>Status</h4>
                    <ul className="sub-filters status">
                        {statuses.map((tag) => (
                            <li key={tag} onClick={() => setStatus(tag, filters, setFilters)}>
                                <input type="radio" readOnly name="status" id={`${tag}-status`} value={tag} checked={filters.status === tag}/>
                                <label htmlFor={`${tag}-status`}>{capitalize(tag)}</label>
                            </li>)
                        )} 
                    </ul>
                </li>
                <li>
                    <h4>Species</h4>
                    <ul className="sub-filters species">
                        {species.map((tag) => (
                            <li key={tag} onClick={() => setSpecies(tag, filters, setFilters)}>
                                <input type="radio" readOnly name="species" id={`${tag}-species`} value={tag} checked={filters.species === tag}/>
                                <label htmlFor={`${tag}-species`}>{capitalize(tag)}</label>
                            </li>)
                    )} 
                    </ul>
                </li>
            </ul>
            <button data-testid={'button-test-1'} onClick={() => setApiUrl(createFilterUrl(filters))}>Apply Filters</button>
            <button data-testid={'button-test-2'} onClick={() => resetFilters(setFilters, setApiUrl)}>Clear Filters</button>
        </div>
    )
}

export default Filter