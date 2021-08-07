import React from 'react';
import CharacterFilter, {fetchAllCharacters} from "../components/CharacterFilter.jsx"
import { render, screen } from "@testing-library/react";
import "regenerator-runtime/runtime.js";
import axios from 'axios';

jest.mock('axios');
describe("bubaynki", () => {
    axios.get.mockImplementation(() => Promise.resolve({data: {info: {count: 31}}}));
    it("should return mocked data", async () => {
        let resultCount = 123; 
        const callback = (data) => { 
            resultCount = data.info.count; 
        }; 
        await fetchAllCharacters(callback, "https://rickandmortyapi.com/api/character");        
        expect(resultCount).toBe(31);
    });
    it("should return main tags classname", () => {
        const { container: {firstChild} } = render(<CharacterFilter/>);
        expect(firstChild.className).toBe("character-card-container");
    });
})