import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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

const MenuBarNavNonAuth = (props) => {
    const { classes } = props;
    return (
        <Grid container>
            <Link to="/login" className={classes.flex}>
                <Button className={classes.secondaryLink}>
                    <Typography
                        variant="title"
                        className={classes.contrastText}>
                        Log In
                    </Typography>
                </Button>
            </Link>
            <Link to="/signup" className={classes.flex}>
                <Button className={classes.secondaryLink}>
                    <Typography
                        variant="title"
                        className={classes.contrastText}>
                        Sign Up
                    </Typography>
                </Button>
            </Link>
        </Grid>
    );
};

export default withStyles(styles)(MenuBarNavNonAuth);
