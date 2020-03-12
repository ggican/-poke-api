import React from "react";
import PropTypes from "prop-types";

import Skeleton from "../../components/skeleton";
import waveImage from "../../static/wave-image.svg";

import StyleCardMoves from "./index.style";

const CardMoves = props => {
    const { level, randomBackground, width, wave } = props;
    const randomColourOne = "#50a1d8".replace(/0/g, function() {
        return (~~(Math.random() * 16)).toString(16);
    });
    const randomColourTwo = "#000000".replace(/0/g, function() {
        return (~~(Math.random() * 16)).toString(16);
    });
    return (
        <StyleCardMoves
            width={width}
            randomBackground={randomBackground}
            style={{
                background: randomBackground
                    ? `linear-gradient(135deg, 
                        ${randomColourOne} 0, 
                        ${randomColourTwo} 100%)`
                    : "#fff",
            }}
        >
            {level && (
                <span className="moves__level">
                    <Skeleton width="30px"></Skeleton>
                </span>
            )}
            <div className="moves__content">
                <div className="moves__label">
                    <Skeleton width="40%"></Skeleton>
                </div>
                <div className="moves__name">
                    <span>
                        <Skeleton width="70%"></Skeleton>
                    </span>
                </div>
            </div>
            {wave && (
                <div className="moves__image">
                    <img src={waveImage} alt="" />
                </div>
            )}
        </StyleCardMoves>
    );
};

CardMoves.defaultProps = {
    level: false,
    randomBackground: false,
    width: 75,
    wave: false,
};
CardMoves.propTypes = {
    /**
      Use `level` for level of moves by default false
      */
    level: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool,
    ]),
    /**
      Use `randomBackground` for set randombackground is true or false
      */
    randomBackground: PropTypes.bool,
    /**
      Use `wave` for set wave bacground is true or false
      */
    wave: PropTypes.bool,
    /**
      Use `width` for set width of card components
      */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export default CardMoves;
