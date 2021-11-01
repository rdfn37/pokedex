import { Switch, Route, Redirect } from "react-router";
import Card from "./components/Card";
import IndexPage from "./components/IndexPage";
import CardPage from "./components/CardPage";
import React, { useEffect, useState } from "react";
import { pokemon } from "./App";

export default props =>
    <Switch>
        <Route exact path='/' component={IndexPage} />
        <Route path='' component={CardPage} />
    </Switch>