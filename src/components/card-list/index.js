import React from "react";
import PropTypes from "prop-types";

import IosArrowForward from "react-ionicons/lib/IosArrowForward";

// begin global import
import { TitleFour } from "../typography";
import ThumbAvatar from "../thumb-avatar";
// end global import

// begin local import
import {
    CardListBoxStyle,
    CardListBoxLeftStyle,
    CardListBoxRightStyle,
} from "./index.style";
// end local import

// begin static import file
import defaultImage from "../../static/image/dummy-square.jpg";
// end static import file

const CardList = props => {
    const { radius, size, name, image } = props;
    return (
        <CardListBoxStyle>
            <CardListBoxLeftStyle>
                <ThumbAvatar
                    radius={radius}
                    size={size}
                    image={image}
                ></ThumbAvatar>
            </CardListBoxLeftStyle>
            <CardListBoxRightStyle>
                <TitleFour style={{ textTransform: "capitalize" }}>
                    {name}
                </TitleFour>
                <IosArrowForward fontSize="24px" color="#424242" />
            </CardListBoxRightStyle>
        </CardListBoxStyle>
    );
};

CardList.defaultProps = {
    image: defaultImage,
    name: "",
    size: "md",
    radius: "circle",
};

CardList.propTypes = {
    /**
       `type` for type of thumb avatar
       */
    radius: PropTypes.oneOf(["box", "circle", "rounded"]),
    /**
         `size` for size of thumb avatar
         */
    size: PropTypes.oneOf(["lg", "md", "sm"]),
    /**
      `name` for name of card
      */
    name: PropTypes.string,
    /**
      `image` for image of card
      */
    image: PropTypes.string,
};

export default CardList;
