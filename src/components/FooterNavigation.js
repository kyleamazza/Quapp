import React from "react";

import Grid from "@material-ui/core/Grid";

import FooterNavigationItem from "./FooterNavigationItem";
import Divider from "./Divider";

const FooterNavigation = props => {
    this.props = props;

    return (
        <Grid
            style={{ marginBottom: "0.35em" }}
            item
            container
            justify="center">
            <FooterNavigationItem text="ABOUT" />
            <Divider />
            <FooterNavigationItem text="SUPPORT" />
            <Divider />
            <FooterNavigationItem text="CONTACT" />
        </Grid>
    );
};

export default FooterNavigation;
