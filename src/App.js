import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { indigo, pink } from '@material-ui/core/colors';

import MenuBar from './components/MenuBar';
import MainRouter from './components/MainRouter';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#63a4ff',
            main: '#1976d2',
            dark: '#004ba0',
            contrastText: '#fff',
        },
        secondary: {
            light: '#8e00f3',
            main: '#5c6bc0',
            dark: '#26418f',
            contrastText: '#000',
        },
        openTitle: indigo['400'],
        protectedTitle: pink['400'],
        type: 'light'
    }
});

const styles = {
    root: {
        position: 'relative',
        minHeight: '100%'
    }
}

class App extends React.Component {
    render() {
        return (
            <BrowserRouter style={styles.root}>
                <MuiThemeProvider theme={theme}>
                    <MainRouter />
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default hot(module)(App);
