import styled from "styled-components";

import * as tokens from "../tokens/dist/variables";

export const CardListBoxStyle = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    margin-bottom: 15px;
    padding: ${tokens.PaddingSmall};
    width: 100%;
`;
export const CardListBoxLeftStyle = styled.div``;
export const CardListBoxRightStyle = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-left: ${tokens.PaddingSmall};
    width: 100%;
`;
