import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SchoolIcon from "@material-ui/icons/School";

import FooterNavigation from "./FooterNavigation"; 

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.primary.light,
        boxShadow:
            "0px -2px 4px -1px rgba(0, 0, 0, 0.2), 0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12)",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: theme.spacing.unit * 30
    },
    icon: {
        margin: theme.spacing.unit * 2,
        height: 45,
        width: 45
    },
    link: {
        textDecoration: "none",
        color: "inherit",
        "&:visited": {
            color: "initial"
        },
        "&:hover": {
            color: "#333",
            textDecoration: "underline"
        }
    }
});

const Divider = () => {
    return <span> | </span>;
};

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid
                className={classes.footer}
                container
                direction="column"
                alignItems="center">
                <Grid
                    item
                    container
                    direction="column"
                    alignItems="center">
                    <SchoolIcon className={classes.icon} />
                    <Typography variant="title" gutterBottom>Quapp!</Typography>
                    <FooterNavigation />
                    <Typography variant="subheading" gutterBottom>
                        &copy; Quapp Inc. ALL RIGHTS RESERVED.
                    </Typography>
                    <Typography variant="subheading" gutterBottom>
                        All trademarks referenced herein are the properties of
                        their respective owners.
                    </Typography>
                    <Grid item>
                        <Link to="/privacypolicy" className={classes.link}>Privacy Policy</Link>
                        <Divider />
                        <Link to="/terms" className={classes.link}>Terms</Link>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Footer);
