import {Component} from "react";
import AppContext from "../../../app/AppContext";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class FuseAuthorization extends Component {
    constructor(props, context) {
        super(props);
        const {routes} = context;
        this.state = {
            accessGranted: true,
            routes
        }
    }

    render() {
        // console.info('Fuse Authorization rendered', this.state.accessGranted);
        return this.state.accessGranted ? <>{this.props.children}</> : null;
    }
}

function mapStateToProps({ auth }) {
    return {
        userRole: auth.user.role,
    };
}

FuseAuthorization.contextType = AppContext;

export default withRouter(connect(mapStateToProps)(FuseAuthorization))
