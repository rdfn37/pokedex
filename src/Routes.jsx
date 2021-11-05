import { Switch, Route, Redirect } from "react-router";
import Card from "./components/Card";
import IndexPage from "./components/IndexPage";
import PokemonPage from "./components/PokemonPage"
import React, { useEffect, useState } from "react";
import { pokemon } from "./App";


export default props =>
    <Switch>
        <Route exact path='/' component={IndexPage} />
        <Route path='' component={props => <PokemonPage />} />
    </Switch>