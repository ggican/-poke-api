import styled from "styled-components";
import * as tokens from "../tokens/dist/variables";

const Button = styled.button`
    background: ${props =>
        tokens[`ButtonColor${props.color || "Default"}BaseBackground`]};
    border: 1px solid transparent;
    border-radius: 8px;
    color: ${props =>
        tokens[`ButtonColor${props.color || "Default"}BaseColor`]};
    cursor: pointer;
    display: ${props => (props.block ? "block" : "inline-block")};
    font-size: ${props =>
        tokens[`ButtonSize${props.size || "Medium"}FontSize`]};
    font-weight: 400;
    line-height: ${props => tokens[`ButtonSize${props.size || 1.5}LineHeight`]};
    outline: none;
    padding: ${props => tokens[`ButtonSize${props.size || "Medium"}Padding`]};
    position: relative;
    text-align: center;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
`;

export default Button;
