import React, { memo } from 'react';
import injectSheet, { ThemeProvider, createUseStyles } from 'react-jss';
import Board from 'containers/Board';
import theme from './theme';
import styles from './globalStyles';

const useStyles = createUseStyles(styles);

const App = memo(() => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes['react-cards-management']}>
                <Board />
            </div>
        </ThemeProvider>
    );
});

export default injectSheet(styles)(App);
