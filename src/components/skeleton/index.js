import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0% {
        background-color: rgba(241, 241, 241, 0.78);
    }
    50% {
        background-color: rgba(241, 241, 241, 0.3);
    }
    100% {
        background-color: rgba(241, 241, 241, 0.78);
    }
`;

const SkeletonLine = styled.div`
    animation: ${pulse} 1s infinite ease-in-out;
    border-radius: ${props => (props.circle ? "50%" : 0)};
    height: ${props => props.height}px;
    margin: 10px 0;
    width: ${props => props.width};
`;

const Skeleton = ({ height = 10, width = "100%", circle = false }) => {
    return (
        <SkeletonLine
            circle={circle}
            width={width}
            height={height}
        ></SkeletonLine>
    );
};

export default Skeleton;
