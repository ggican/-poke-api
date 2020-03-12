import styled from "styled-components";

export default styled.button`
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    border: 1px solid #ddd;
    flex: 0 0 auto;
    margin-bottom: 5px;
    margin-right: 10px;
    padding: 7px;
    position: relative;
    width: ${props => props.width || 70}%;

    ${({ isActive }) =>
        isActive &&
        `
        background: #f7f7f7;
        border: 1px solid #5295c7;
    `}
    .filter {
        &__content {
            display: block;
            width: 100%;
        }

        &__title {
            display: block;
            font-size: 12px;
            font-weight: 300;
            width: 100%;
            > span {
                color: #4a4a4a;
                font-weight: 600;
                text-transform: capitalize;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
                ${({ isActive }) =>
                    isActive &&
                    `
                    color: #5295c7;
                `}
            }
        }
    }
`;
