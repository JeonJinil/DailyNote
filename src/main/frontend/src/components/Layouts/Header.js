import React,{Component} from "react";
import {AppBar, Button, IconButton, Toolbar, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const style = {
    marginRight : '10px'
}

class Header extends Component {
    constructor(props) {
        super(props);

    };

    gotoHome() {
        console.log("gotoHOM<E");
        this.props.history.push('/');
    }

    render (){
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton aria-label="menu" style={style}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="headline" color="inherit">
                        Daily Note
                    </Typography>
                    <Button onClick={this.gotoHome}>LOGIN</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;