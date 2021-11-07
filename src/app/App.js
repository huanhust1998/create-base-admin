import '../App.css';
import Auth from "./auth/Auth";
import {Router} from 'react-router-dom';
import history from "../@history"
import FuseAuthorization from "../@fuse/core/FuseAuthorization/FuseAuthorization";
import FuseTheme from "../@fuse/core/FuseTheme/FuseTheme";
import {SnackbarProvider} from 'notistack';
import FuseLayout from "../@fuse/core/FuseLayout";
import withAppProviders from "./withAppProviders";

function App() {
    return (
        <Auth>
            <Router history={history}>
                <FuseAuthorization>
                    <FuseTheme>
                        <SnackbarProvider
                            maxSnack={5}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            classes={{
                                containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',
                            }}
                        >
                            <FuseLayout/>
                        </SnackbarProvider>
                    </FuseTheme>
                </FuseAuthorization>
            </Router>
        </Auth>
    );
}

export default withAppProviders(App);
