import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import MainContentGrid from '../../components/MainContentGrid';

const useStyles = makeStyles({
    root: {
        padding: '2%',
    }
});

const MainPageContainer = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" align="center">
                        Title of App
                    </Typography>
                </Toolbar>
            </AppBar>
            <MainContentGrid/>
        </React.Fragment>
    );
};

export default MainPageContainer;
