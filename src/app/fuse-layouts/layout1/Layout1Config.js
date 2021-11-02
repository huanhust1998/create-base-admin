import {memo} from "react";
import {makeStyles} from "@material-ui/core";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        '&.boxed': {
            clipPath: 'inset(0)',
            maxWidth: (props) => `${props.config.containerWidth}px`,
            margin: '0 auto',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        '&.container': {
            '& .container': {
                maxWidth: (props) => `${props.config.containerWidth}px`,
                width: '100%',
                margin: '0 auto',
            },
        },
    },
}));


function Layout1(props) {
    const config = useSelector(({fuse})=>fuse.settings.curent.layout.config);

}

export default memo(Layout1)