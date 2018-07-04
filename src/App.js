import React from "react";
import { BrowserRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { indigo, pink } from "@material-ui/core/colors";

import MainRouter from "./components/MainRouter";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#63a4ff",
            main: "#1976d2",
            dark: "#004ba0",
            contrastText: "#fff"
        },
        secondary: {
            light: "#8e00f3",
            main: "#5c6bc0",
            dark: "#26418f",
            contrastText: "#000"
        },
        openTitle: indigo["400"],
        protectedTitle: pink["400"],
        type: "light"
    },
    spacing: {
        unit: 8,
        paddingBottom: 280
    },
    typography: {
        display3: {
            color: "#000"
        }
    }
});

const styles = {
    root: {
        position: "relative",
        minHeight: "100%"
    }
};

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
