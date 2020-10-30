import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

export const useRouters = isAuthenticated => {
    if (isAuthenticated) {
        // return function for authenticated user.
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPage />
                </Route>
                <Route path="/create" exact>
                    <CreatePage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }
    // default return for an unauthorized user.
    return (
        <Switch>
            {/* Redirect to main page */}
            <Route path="/" exact>
                <AuthPage />
            </Route>
            {/* Redirect to main page is sth went wrong */}
            <Redirect to="/" />
        </Switch>
    )
}
