import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Login from "../components/Authenticate/Login";
// import Signup from "../components/Authenticate/SignUp";

const AuthenticateRouterComponent = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path = "/" component = {Login}></Route>
                    {/*<Route path = "/Signup" component = {Signup}></Route>*/}
                </Switch>
            </Router>
        </div>
    )
}

export default AuthenticateRouterComponent;