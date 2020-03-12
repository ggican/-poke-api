import React, { Fragment } from "react";
import styled from "styled-components";

import Skeleton from "../skeleton";

const SkeletonBox = styled.div`
    background: rgb(255, 255, 255);
    margin: 12px 0px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 5px;
    align-items: center;
`;

const CardListLoading = () => {
    return (
        <Fragment>
            <SkeletonBox>
                <Skeleton circle height={40} width="40px"></Skeleton>
                <Skeleton height={17} width="75%"></Skeleton>
                <Skeleton height={17} width="44px"></Skeleton>
            </SkeletonBox>
            <SkeletonBox>
                <Skeleton circle height={40} width="40px"></Skeleton>
                <Skeleton height={17} width="75%"></Skeleton>
                <Skeleton height={17} width="44px"></Skeleton>
            </SkeletonBox>
            <SkeletonBox>
                <Skeleton circle height={40} width="40px"></Skeleton>
                <Skeleton height={17} width="75%"></Skeleton>
                <Skeleton height={17} width="44px"></Skeleton>
            </SkeletonBox>
        </Fragment>
    );
};

export default CardListLoading;
