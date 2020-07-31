import React from "react";

import style from "./Preload.module.css";
import preload from "../../assets/images/loading.gif";

function Preload() {
    return (
        <div className={style.preload}>
            <img src={preload} alt="loading"/>
        </div>
    );
}

export default Preload;