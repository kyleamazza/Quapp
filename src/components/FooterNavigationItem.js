import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    root: {
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

const FooterNavigationItem = props => {
    const { classes, text } = props;
    return (
        <Link to={`/${text}`} className={classes.root}>
            <Typography variant="subheading">{text}</Typography>
        </Link>
    );
};

export default withStyles(styles)(FooterNavigationItem);
