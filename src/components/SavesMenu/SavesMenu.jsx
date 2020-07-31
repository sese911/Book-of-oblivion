import React from "react";

import style from "./SavesMenu.module.css";

function SavesMenu({ls}) {
    let saves = ls.getSavesList();
    while (saves.length < 4) saves.push(null);

    return (
        <div className={style.savesMenuContainer}>
            {saves.map((save, index) => <Save key={index} save={save}/>)}
        </div>
    );
}

function Save({save}) {
    if (save) return (
        <div className={style.save}>
            <span>{save.currentQuest}</span>
            <span>{`${save.progress}% забвения`}</span>
            <div>
                <span>{save.date}</span>
                <span>Удалить <b>|</b></span>
                <span>Загрузить</span>
            </div>
        </div>
    );

    return <div className={style.save}>
        <span>-</span>
        <span>-</span>
        <div>
            <span>-</span>
            <span>Начать новую жатву</span>
        </div>
    </div>
}

export default SavesMenu;