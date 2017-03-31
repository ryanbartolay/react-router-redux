import React from "react";
import { Router, IndexRoute, Route, browserHistory } from "react-router";
import Layout from "components/Layout";
import HomePage from "components/pages/homePage.react";
import AboutPage from "components/pages/AboutPage.react";
import ContactPage from "components/pages/ContactPage.react";
import PageNotFound from "components/common/PageNotFound"

const Routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="contact" component={ContactPage} />
        <Route path='*' component={ PageNotFound }/>
    </Route>
);

export default Routes;
