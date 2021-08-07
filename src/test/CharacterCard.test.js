import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

const mockCharacter = {
    "id": 31,
    "name": "Baby Wizard",
    "status": "Dead",
    "species": "Alien",
    "type": "Parasite",
    "gender": "Male",
    "origin": {
      "name": "unknown",
      "url": ""
    },
    "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/31.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/15"
    ],
    "url": "https://rickandmortyapi.com/api/character/31"
  }

describe("check html tags", () => {
    it("should return main tags classname", () => {
        const { container: {firstChild} } = render(
        <BrowserRouter>
            <CharacterCard character= {mockCharacter}/>
        </BrowserRouter>
        );
        expect(firstChild.className).toBe("character-card");
    });
})