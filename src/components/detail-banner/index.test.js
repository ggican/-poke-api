import React from "react";
import DetailBanner from "./index";

let element;
beforeEach(() => {
    element = <DetailBanner height={7} weight={69}></DetailBanner>;
});

describe("Detail Banner Component", () => {
    it("renders correct detail banner and snapshot element two <DetailBanner/>", () => {
        expect(toJson(mount(element))).toMatchSnapshot();
    });

    it("renders correct detail banner have height <DetailBanner/>", () => {
        expect(
            mount(element)
                .find({ "test-id": "height" })
                .text(),
        ).toEqual("0.7 m");
    });

    it("renders correct detail banner have weight <DetailBanner/>", () => {
        expect(
            mount(element)
                .find({ "test-id": "weight" })
                .text(),
        ).toEqual("6.9 Kg");
    });

    // it('check elementOne name label  <CardMoves/>', () => {
    //     expect(
    //         shallow(elementOne)
    //             .find({ className: 'moves--label' })
    //             .text()
    //     ).toEqual('MOVES NAME')
    // })

    // it('check elementOne name label  <CardMoves/>', () => {
    //     expect(
    //         shallow(elementOne)
    //             .find({ className: 'moves--label' })
    //             .text()
    //     ).toEqual('MOVES NAME')
    // })

    // it('check elementOne check pokemon name <CardMoves/>', () => {
    //     expect(
    //         shallow(elementOne)
    //             .find({ className: 'moves--name' })
    //             .find('span')
    //             .text()
    //     ).toEqual('element-one')
    // })

    // it('check elementOneLoops check pokemon name <CardMoves/>', () => {
    //     let styleList = []
    //     elementOneLoop
    //         .find('CardMoves')
    //         .find('StyledComponent')
    //         .forEach(node => {
    //             styleList.push(node.prop('style'))
    //         })
    //     expect(styleList[1].background !== styleList[0].background).toEqual(
    //         true
    //     )
    // })

    // it('check element two check background default is #fff <CardMoves/>', () => {
    //     expect(shallow(elementTwo).prop('style')).toHaveProperty(
    //         'background',
    //         '#fff'
    //     )
    // })

    // it('check element two check level <CardMoves/>', () => {
    //     expect(
    //         shallow(elementTwo)
    //             .find({ className: 'moves--level' })
    //             .text()
    //     ).toEqual('LVL 11')
    // })

    // it('check element two check width <CardMoves/>', () => {
    //     expect(renderer.create(elementOne).toJSON()).toHaveStyleRule(
    //         'width',
    //         '35%'
    //     )
    // })

    // it('check element two check box shadow <CardMoves/>', () => {
    //     expect(renderer.create(elementOne).toJSON()).toHaveStyleRule(
    //         'box-shadow',
    //         '2px 2px 6px 0px #cecece'
    //     )
    // })
});
