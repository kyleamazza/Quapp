import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    root: {
        margin: "0 auto",
        paddingBottom: theme.spacing.unit * 35
    },
    textContainer: {
        flexDirection: "column",
        paddingLeft: 400,
        paddingRight: 400
    },
    header: {
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 50
    },
    bold: {
        fontWeight: "bold"
    }
});

class Terms extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                className={classes.root}
                direction="column"
                alignItems="center">
                <Grid item container className={classes.header}>
                    <Typography variant="headline" color="primary">
                        Terms of Service
                    </Typography>
                    <Typography
                        variant="body"
                        color="inherit"
                        className={classes.bold}>
                        Last updated: TODO!
                    </Typography>
                </Grid>
                <Grid item container className={classes.textContainer}>
                    <Typography variant="body">
                        Please read these Terms of Service carefully before
                        using the "https://Quapp.com" website operated by Quapp!
                        inc.
                    </Typography>
                    <Typography></Typography>
                    <Typography variant="body">
                        Your access to and use of Quapp! is conditioned on your
                        acceptance of and compliance with these Terms. These
                        Terms apply to all visitors, users and others who access
                        or use Quapp!.
                    </Typography>
                    <Typography className={classes.bold} variant="body">
                        By accessing or using the Service you agree to be bound
                        by these Terms. If you disagree with any part of the
                        terms then you may not access the Service.
                    </Typography>
                    <Typography className={classes.bold} variant="title">
                        Termination
                    </Typography>
                    <Typography variant="body">
                        We may terminate or suspend access to our Service
                        immediately, without prior notice or liability, for any
                        reason whatsoever, including without limitation if you
                        breach the Terms.
                    </Typography>
                    <Typography></Typography>
                    <Typography variant="body">
                        All provisions of the Terms which by their nature should
                        survive termination shall survive termination,
                        including, without limitation, ownership provisions,
                        warranty disclaimers, indemnity and limitations of
                        liability.
                    </Typography>
                    <Typography className={classes.bold} variant="title">
                        Content
                    </Typography>
                    <Typography variant="body">
                        Our Service allows you to post, link, store, share and
                        otherwise make available certain information, text,
                        graphics, videos, or other material ("Content"). You are
                        responsible for any content posted to our service. By
                        continuing to use our service you agree to forfeit your
                        rights to your privacy, your data, and your right to
                        sue. By using our service you affirm that "Quapp!"--and
                        any parties affiliated with "Quapp!"--are not liable for
                        anything ever. Any consequences from using "Quapp!" rest
                        only with the user. In no way is "Quapp!" and any of its
                        affiliates responsible for any damages caused by the use
                        of "Quapp!".
                    </Typography>
                    <Typography className={classes.bold} variant="title">
                        Links To Other Web Sites
                    </Typography>
                    <Typography variant="body">
                        Our Service may contain links to third-party web sites 
                        or services that are not owned or controlled by ​Quapp! Inc.
                    </Typography>
                    <Typography></Typography>
                    <Typography variant="body">
                        Quapp!​ has no control over, and assumes no responsibility 
                        for, the content, privacy policies, or practices of any 
                        third party web sites or services. You further acknowledge 
                        and agree that Quapp!​ shall not be responsible or liable, 
                        directly or indirectly, for any damage or loss caused or 
                        alleged to be caused by or in connection with use of or 
                        reliance on any such content, goods or services available 
                        on or through any such web sites or services.
                    </Typography>
                    <Typography className={classes.bold} variant="title">
                        Changes
                    </Typography>
                    <Typography variant="body">
                        We reserve the right, at our sole discretion, to modify or 
                        replace these Terms at any time. If a revision is material 
                        we will try to provide at least 0​ days' notice prior to any 
                        new terms taking effect. What constitutes a material change 
                        will be determined at our sole discretion.
                    </Typography>
                    <Typography className={classes.bold} variant="title">
                        Contact us
                    </Typography>
                    <Typography variant="body" gutterBottom={true}>
                        If you have any questions about these Terms, please contact us.
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Terms);
