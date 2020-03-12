import React from "react";
import Abilities from "./index";

let element;
beforeEach(() => {
    const abilities = [
        {
            ability: {
                name: "chlorophyll",
                url: "https://pokeapi.co/api/v2/ability/34/",
            },
            is_hidden: true,
            slot: 3,
        },
        {
            ability: {
                name: "overgrow",
                url: "https://pokeapi.co/api/v2/ability/65/",
            },
            is_hidden: false,
            slot: 1,
        },
    ];
    element = <Abilities data={abilities}></Abilities>;
});

describe("Abilities Component", () => {
    it("renders correct Abilities and snapshot element <Abilities/>", () => {
        expect(toJson(mount(element))).toMatchSnapshot();
    });

    it("check total length element loop <CardMoves/>", () => {
        expect(
            mount(element).find({ "test-id": "box-attribute" }).length,
        ).toEqual(2);
    });

    it("check first element name <CardMoves/>", () => {
        expect(
            mount(element)
                .find({ "test-id": "box-attribute" })
                .first()
                .find("span")
                .first()
                .text(),
        ).toEqual("chlorophyll");
    });

    it("check element have class hidden <CardMoves/>", () => {
        expect(
            mount(element)
                .find({ "test-id": "box-attribute" })
                .first()
                .hasClass("is_hidden"),
        ).toEqual(true);
    });

    it("check element have slot number <CardMoves/>", () => {
        expect(
            mount(element)
                .find({ "test-id": "box-attribute" })
                .first()
                .find("span")
                .last()
                .text(),
        ).toEqual("3");
    });
});
