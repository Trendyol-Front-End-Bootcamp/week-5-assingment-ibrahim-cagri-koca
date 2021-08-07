
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import PageControlButtons from "../components/PageControlButtons";

describe("check html tags", () => {
    const mockAllCharacters = {
        "info": {
          "count": 671,
          "pages": 34,
          "next": "https://rickandmortyapi.com/api/character?page=3",
          "prev": "https://rickandmortyapi.com/api/character?page=1"
        },
        "results": [
          {
            "id": 21,
            "name": "Aqua Morty",
            "status": "unknown",
            "species": "Humanoid",
            "type": "Fish-Person",
            "gender": "Male",
            "origin": {
              "name": "unknown",
              "url": ""
            },
            "location": {
              "name": "Citadel of Ricks",
              "url": "https://rickandmortyapi.com/api/location/3"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
            "episode": [
              "https://rickandmortyapi.com/api/episode/10",
              "https://rickandmortyapi.com/api/episode/22"
            ],
            "url": "https://rickandmortyapi.com/api/character/21",
            "created": "2017-11-04T22:39:48.055Z"
          },
          ]
        }
    let apiUrl = "";
    const setApiUrl = (newUrl) => {apiUrl = newUrl;}
    beforeEach(() => {
        apiUrl = "";
    });
    it("should return main tags classname", () => {
        const { container: {firstChild} } = render(
            <PageControlButtons allCharacters={{}} setApiUrl={setApiUrl}/>
        );
        expect(firstChild.className).toBe("page-control-container");
    });
    it("should set apiUrl to have return next page url", () => {
        const { container: {firstChild} } = render(<PageControlButtons allCharacters={mockAllCharacters} setApiUrl={setApiUrl}/>);
        fireEvent.click(screen.getByTestId("next-page"));
        expect(apiUrl).toBe("https://rickandmortyapi.com/api/character?page=3");
    });
    it("should set apiUrl to have return previous page url", () => {
        const { container: {firstChild} } = render(<PageControlButtons allCharacters={mockAllCharacters} setApiUrl={setApiUrl}/>);
        fireEvent.click(screen.getByTestId("previous-page"));
        expect(apiUrl).toBe("https://rickandmortyapi.com/api/character?page=1");
    });
})