import styled from "styled-components";

const Button = styled.button`
    display: ${props => (props.block ? "block" : "inline-block")};
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    position: relative;
    width: auto;
    cursor: pointer;
    outline: none;
    border: 1px solid transparent;
    border-radius: 8px;
    background: #fff;
    color: #fff;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export default Button;
