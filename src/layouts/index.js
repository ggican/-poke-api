import React from "react";
import Header from "../components/header";

import StyleLayouts from "./index.style";
const Layouts = ({ children, style = { header: true } }) => {
    return (
        <StyleLayouts>
            {style?.header && <Header></Header>}
            {children}
        </StyleLayouts>
    );
};

export default Layouts;
