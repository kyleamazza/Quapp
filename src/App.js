import React from "react";
import { BrowserRouter } from "react-router-dom";
import { hot } from "react-hot-loader";

import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { indigo, pink } from "@material-ui/core/colors";

import firebase from "firebase/app";
import { auth } from "./firebase";

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
        paddingBottom: 240
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
    constructor(props) {
        super(props);

        console.log("App constructor");
        this.state = {
            authUser: false,
            loading: true
        };
    }

    componentDidMount() {
        this.removeListener = firebase.auth().onAuthStateChanged(user => {
            console.log("Auth state changed");
            console.log(user);
            if (user) {
                this.setState({
                    authUser: true,
                    loading: false
                });
            } else {
                this.setState({
                    authUser: false,
                    loading: false
                });
            }
        });
    }

    componentWillUnmount() {
        this.removeListener();
    }

    render() {
        const { classes } = this.props;
        const { authUser } = this.state;

        console.log(authUser);
        return (
            <BrowserRouter style={styles.root}>
                <MuiThemeProvider theme={theme}>
                    <MainRouter authUser={authUser} />
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default hot(module)(withStyles(styles)(App));
