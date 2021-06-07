import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import PostList from "./PostList";
// import PostRouterComponent from "../../route/PostRouterComponent"

class index extends Component {
    render() {
        return(
            <Grid container sm>
                <Grid item sm>
                    {PostList}
                </Grid>
            </Grid>
        );
    }
}

export default index;

