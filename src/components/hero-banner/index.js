import React from "react";
import WaveImage from "../../static/wave-image.svg";
import HeroBannerStyles from "./index.style";
import type from "./index.type";

const HeroBanner = props => {
    const { total, unique } = props;
    return (
        <HeroBannerStyles>
            <div className="hero-desc">
                <p test-id="total-pokemon">
                    <span>{total}</span> Pokemon
                </p>
                <p test-id="total-unique">
                    <span>{unique}</span> Unique Pokemon
                </p>
            </div>
            <img src={WaveImage} alt="" />
        </HeroBannerStyles>
    );
};

HeroBanner.propTypes = type;
export default HeroBanner;
