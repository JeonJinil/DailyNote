import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import RouterComponent from "../../route/RouterComponent";

class index extends Component {
    render() {
        return(
            <Grid container sm>
                <Grid item sm>
                    <RouterComponent/>
                </Grid>
            </Grid>
        );
    }
}

export default index;