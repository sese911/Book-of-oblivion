import React, {useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import {init} from "../../model/appReducer";

import style from "./App.module.css";
import ls from "../../model/localStorage";
import Preload from "../common/Preload";
import SavesMenu from "../SavesMenu/SavesMenu";
import Header from "../Header/Header";

function App({isAppInitialized, isSaveInitialized, init}) {
    useEffect( init, []);

    if (!isAppInitialized) return <Preload />
    if (!isSaveInitialized) return <SavesMenu ls={ls} />;

    return (
        <div className={style.mainContainer}>
            <Header />
            <main className={style.content}>
                <Switch>
                    <Route/>
                </Switch>
            </main>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        isAppInitialized: state.app.isAppInitialized,
        isSaveInitialized: state.app.isSaveInitialized
    }
}

export default connect(mapStateToProps, {init})(App);
