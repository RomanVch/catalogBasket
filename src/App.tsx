import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.scss';
import Main from "./component/Main/Main";
import {Basket} from "./component/Basket/Basket";
import {Error404} from "./component/404/404";

function App() {

    return (
<div className={"App"}>
    <Switch>
        <Route exact path="/" render={() => <Main/>}/>
        <Route path="/basket" render={() => <Basket/>}/>
        <Route render={() => <Error404/>}/>
    </Switch>
</div>
    );
}

export default App;
