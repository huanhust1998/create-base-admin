import {Component} from "react";
import FuseSplashScreen from "../../@fuse/FuseSplashScreen";


class Auth extends Component {
    state = {
        waitAuthCheck: true
    }

    render() {
        return this.state.waitAuthCheck ? <FuseSplashScreen/> : <>{this.props.children}</>
    }
}

export default Auth;