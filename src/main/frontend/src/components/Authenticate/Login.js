import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import UserService from "../../service/UserService";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginId: '',
            loginPw: '',
        }

    }

    registerAuthenticate = (event) => {
        event.preventDefault()

        let user = {
            loginId : this.state.loginId,
            loginPw : this.state.loginPw
        }
        console.log(`user = ${JSON.stringify(user)}`);

        UserService.loginUser(user).then(res => {
            // this.props.history.push('/');
        });
    }

    findUserAuthenticate = (event) => {
        console.log(`findUserAuthenticate`);
        // TODO
    }

    changeLoginIdHandler = (event) => {
        this.setState({loginId: event.target.value});
    }

    changeLoginPwHandler = (event) => {
        this.setState({loginPw: event.target.value});
    }

    render() {
        return (
            <div style ={{
                display : 'flex', justifyContent : 'center', alignItems: 'center',
                width : '100%', height : '100vh'
            }}>
                <form style ={{display : 'flex', flexDirection:'column'}}>
                    <label>ID</label>
                    <input
                        type="text"
                        value={this.state.loginId}
                        onChange={this.changeLoginIdHandler}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={this.state.loginPw}
                        onChange={this.changeLoginPwHandler}
                    />
                    <br/>
                    <div>
                        <button onClick={this.registerAuthenticate}>
                            Login
                        </button>
                        <button onClick={this.findUserAuthenticate}>
                            ID/PW 찾기
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}

export default Login;