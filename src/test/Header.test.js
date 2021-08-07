import Header from "../components/Header";
import React from "react";
import { render } from "@testing-library/react";

describe("check html tags", () => {
    it("should return main tags classname", () => {
        const { container: {firstChild} } = render(
            <Header/>
        );
        expect(firstChild.className).toBe("header");
    });
})