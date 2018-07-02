import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    root: {
        margin: "0 auto",
        paddingBottom: theme.spacing.paddingBottom
    },
    textContainer: {
        flexDirection: "column",
        paddingLeft: 400,
        paddingRight: 400
    },
    header: {
        flexDirection: "column",
        alignItems: 'center',
        paddingTop: 50
    },
    bold: {
        fontWeight: "bold"
    },
    list: {
        paddingLeft: 100
    },
    listItem: {

    }
});

class PrivacyPolicy extends React.Component {
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
                        Privacy Notice
                    </Typography>
                    <Typography variant="body" color="inherit" className={classes.bold}>
                        Last updated: TODO!
                    </Typography>
                </Grid>
                <Grid item container className={classes.textContainer}>
                    <Typography variant="body">
                        Please read this notice of privacy carefully before
                        using the "https://Quapp.com" website operated by Quapp!
                        Inc.
                    </Typography>
                    <Typography></Typography>
                    <Typography variant="body">
                        Your access to and use of the Service is conditioned on
                        your acceptance of this policy. The privacy policy
                        applies to all visitors, users and others who access or
                        use Quapp!.
                    </Typography>
                    <Typography></Typography>
                    <Typography className={classes.bold} variant="body">
                        This notice is only applicable to information collected
                        by Quapp!. The topics covered are as follows:
                    </Typography>
                    <ul className={classes.list}>
                        <li className={classes.listItem}>
                            <Typography variant="body">
                                What personally identifiable information is
                                collected from you through the website, how it
                                is used and with whom it may be shared.
                            </Typography>
                        </li>
                        <li className={classes.listItem}>
                            <Typography variant="body">
                                What choices are available to you regarding the
                                use of your data.
                            </Typography>
                        </li>
                        <li className={classes.listItem}>
                            <Typography variant="body">
                                The security procedures in place to protect the
                                misuse of your information.
                            </Typography>
                        </li>
                    </ul>
                    <Typography className={classes.bold} variant="title">
                        Information Collection
                    </Typography>
                    <Typography variant="body">
                        We are the sole owners of the information collected on
                        Quapp!. We may collect any information posted to our
                        service. We may sell or rent this information to anyone.
                        We may share your information with any third party. We
                        may contact you via email in the future to tell you
                        about new services, or changes to this privacy policy.
                    </Typography>
                    <Typography className={classes.bold} variant="title">
                        Your Access to and Control Over Information
                    </Typography>
                    <Typography variant="body">
                        Quapp! inc. has sole access and control over information
                        collected.
                    </Typography>
                    <Typography className={classes.bold} variant="title">Security</Typography>
                    <Typography variant="body">
                        We take no precautions to protect your information.
                    </Typography>
                    <Typography className={classes.bold} variant="title">Registration</Typography>
                    <Typography variant="body">
                        In order to use Quapp!, a user must register an account.
                        Users are required to give certain information to use
                        our service. This information is used to ensure optimal
                        functionality of Quapp!.
                    </Typography>
                    <Typography className={classes.bold} variant="title">Sharing</Typography>
                    <Typography variant="body" gutterBottom={true}>
                        We share aggregated demographic information with our
                        partners and advertisers. This may or may not be linked
                        to any personal information that can identify any
                        individual person.
                    </Typography>
                    <Typography className={classes.bold} variant="title">Contact us</Typography>
                    <Typography variant="body" gutterBottom={true}>
                        If you have any questions about this notice or if we are
                        not abiding by our policy, please contact us.
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(PrivacyPolicy);
