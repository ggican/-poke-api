import styled from "styled-components";

const Container = styled.div`
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    overflow-y: hidden;
    padding: ${props => (props.noPadding ? 0 : "20px 15px 10px 15px")};
    padding-bottom: 110px;
    width: 450px;
    @media (max-width: 450px) {
        width: 100%;
    }
`;

export default Container;
