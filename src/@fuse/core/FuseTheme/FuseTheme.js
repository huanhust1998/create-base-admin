import {memo} from "react";
import {ThemeProvider} from '@material-ui/core/styles';
import {useSelector} from "react-redux";

function FuseTheme(props) {
    // const direction = useSelector(({ fuse }) => fuse.settings.defaults.direction);
    // const mainTheme = useSelector(selectMainTheme);

    return <ThemeProvider /*theme={mainTheme}*/>{props.children}</ThemeProvider>
}

export default memo(FuseTheme)