import React from "react";
import Header from "./index";

let wrapper;
let wrap;

beforeEach(() => {
    wrapper = shallow(
        <MemoryRouter initialEntries={["/random"]}>
            <Header data-test="header-test-wrapper" />
        </MemoryRouter>,
    );
    wrap = mount(
        <MemoryRouter initialEntries={["/random"]}>
            <Header data-test="header-test-wrapper" />
        </MemoryRouter>,
    );
});

describe("Header Component", () => {
    it("renders and create snapshot <Header />", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
    });
});
