import React from "react";
import { Redirect, Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { auth } from "../firebase";

const styles = theme => ({
    secondaryLink: {
        flex: 1,
        color: theme.palette.primary.contrastText,
        "&:hover": {
            textDecoration: "underline"
        }
    },
    flex: {
        display: "flex",
        alignSelf: "stretch"
    },
    contrastText: {
        color: theme.palette.primary.contrastText
    }
});

class MenuBarNavAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    handleSignOut = event => {
        console.log("Trying to sign out");
        auth.doSignOut()
        .then((res) => {
            this.setState({ redirect: true });
        });
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        const { classes } = this.props;
        return (
            <Grid container>
                <Link to="/settings" className={classes.flex}>
                    <Button className={classes.secondaryLink}>
                        <Typography
                            variant="title"
                            className={classes.contrastText}>
                            Settings
                        </Typography>
                    </Button>
                </Link>
                <Button
                    onClick={this.handleSignOut}
                    className={classes.secondaryLink}>
                    <Typography
                        variant="title"
                        className={classes.contrastText}>
                        Sign Out
                    </Typography>
                </Button>
            </Grid>
        );
    }
}

export default withStyles(styles)(MenuBarNavAuth);
