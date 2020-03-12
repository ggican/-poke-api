import React from "react";

import AbilitiesLoading from "./index.loading";
import AbilitiesStyle from "./index.style";
const Abilities = props => {
    const { data } = props;
    return (
        <AbilitiesStyle>
            <div className="label-types">
                {data.map(item => {
                    return (
                        <div
                            test-id={"box-attribute"}
                            key={item.ability.name}
                            className={`label-types--box ${
                                item.is_hidden ? "is_hidden" : ""
                            }`}
                        >
                            <span>{item.ability.name}</span>{" "}
                            <span>{item.slot}</span>
                        </div>
                    );
                })}
            </div>
        </AbilitiesStyle>
    );
};

Abilities.Loading = AbilitiesLoading;

export default Abilities;
