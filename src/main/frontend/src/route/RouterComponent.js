import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Login from "../components/Authenticate/Login";
// import Signup from "../components/Authenticate/SignUp";
import PostList from "../components/Posts/PostList";
import PostDetail from "../components/Posts/PostDetail";

const RouterComponent = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/post/" component = {PostList}></Route>
                    <Route path = "/post/postDetail" component = {PostDetail}></Route>
                    <Route exact path = "/" component = {Login}></Route>
                    {/*<Route path = "/Signup" component = {Signup}></Route>*/}
                </Switch>
            </Router>
        </div>
    )
}

export default RouterComponent;