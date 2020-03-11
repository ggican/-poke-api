import styled from "styled-components";

const Content = styled.div`
    display: block;
    padding: 70px 0;
    width: 100%;
    ${({ noPadding }) =>
        noPadding &&
        `
            padding:0;
    `}
`;

export default Content;
