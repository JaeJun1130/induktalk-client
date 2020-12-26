import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Auth from "../routes/Auth";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Auth" exact>
                    <Auth />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
