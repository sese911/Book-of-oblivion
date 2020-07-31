import React from "react";
import {NavLink} from "react-router-dom";

import style from "./Header.module.css";

function Header() {
    return (
        <header>
            <menu>
                <div className={style.tab}>
                    <NavLink to="/quests">Quests</NavLink>
                </div>
                <div className={style.tab}>
                    <NavLink to="/items">Items</NavLink>
                </div>
                <div className={style.tab}>
                    <NavLink to="/locations">Locations</NavLink>
                </div>
                <div className={style.tab}>
                    <NavLink to="/settings">Settings</NavLink>
                </div>
            </menu>
            <div className={style.options}></div>
        </header>
    );
}

export default Header;