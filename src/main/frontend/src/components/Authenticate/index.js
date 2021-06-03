import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import AuthenticateRouterComponent from "../../route/AuthenticateRouterComponent";

class index extends Component {
    render() {
        return(
            <Grid container sm>
                <Grid item sm>
                    <AuthenticateRouterComponent/>
                </Grid>
            </Grid>
        );
    }
}

export default index;