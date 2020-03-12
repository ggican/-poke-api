// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Enzyme, { shallow, render, mount } from "enzyme";
import { renderHook, act } from "@testing-library/react-hooks";
import renderer from "react-test-renderer";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { MemoryRouter } from "react-router";
// import "jest-prop-type-error";
import "jest-styled-components";
import tokens from "./components/tokens";

Enzyme.configure({ adapter: new Adapter() });

const MountWithThemeStyledComponent = child => {
    return mount(child, {
        wrappingComponent: ({ children }) => (
            <ThemeProvider theme={tokens}>{children}</ThemeProvider>
        ),
    });
};

const ShallowWithThemeStyledComponent = child => {
    return shallow(child, {
        wrappingComponent: ({ children }) => (
            <ThemeProvider theme={tokens}>{children}</ThemeProvider>
        ),
    });
};

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
};

global.mountWithTheme = MountWithThemeStyledComponent;
global.shallowWithTheme = ShallowWithThemeStyledComponent;
global.MemoryRouter = MemoryRouter;
global.renderHook = renderHook;
global.renderer = renderer;
global.styled = styled;
global.act = act;
global.shallow = shallow;
global.toJson = toJson;
global.render = render;
global.mount = mount;
global.localStorage = localStorageMock;
