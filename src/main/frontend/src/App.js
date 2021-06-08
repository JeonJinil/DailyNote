import React, {Component, Fragment} from "react";
import {Header , Footer} from "./components/Layouts"
import Posts from "./components/Posts"
import Auth from "./components/Authenticate"


export default class extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Auth />
                <Footer />
            </Fragment>
        );
    }
}