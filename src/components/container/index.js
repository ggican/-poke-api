import styled from "styled-components";

const Container = styled.div`
    display: block;
    margin: 0 auto;
    width: 450px;

    @media (max-width: 450px) {
        padding: 0 10px;
        width: 100%;
        ${({ fluid }) => fluid && ` padding:0; `}
    }
`;

export default Container;
