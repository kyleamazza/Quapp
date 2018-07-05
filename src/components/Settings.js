import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
    root: {
        paddingBottom: theme.spacing.paddingBottom
    },
    textContainer: {
        flexDirection: "column",
        marginBottom: 15
    },
    header: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: 5
    },
    bold: {
        fontWeight: "bold",
        marginBottom: 10
    },
    switches: {
        display: "inline-block"
    },
    hr: {
        marginBottom: 15
    }
});

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: true,
            push: true,
        };
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    render() {
        const { classes } = this.props;
        return (
            <Grid container>
                <Grid
                    container
                    className={classes.root}
                    direction="column"
                    alignItems="left">
                    <Grid item container className={classes.header}>
                        <Typography
                            className={classes.bold}
                            variant="headline"
                            color="primary">
                            Settings
                        </Typography>
                    </Grid>
                    <hr className={classes.hr} />
                    <Grid item container className={classes.textContainer}>
                        <Typography className={classes.bold} variant="title">
                            Account
                        </Typography>
                        <hr className={classes.hr} />
                        <Typography variant="body1">
                            Name: John Doe
                        </Typography>
                        <Typography variant="body1">
                            Email: john.doe@csulb.edu
                        </Typography>
                    </Grid>
                    <Typography className={classes.bold} variant="title">
                            Notifications
                    </Typography>
                    <hr className={classes.hr} />
                    <FormControl component="fieldset">
                        <FormGroup className={classes.switches}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.data}
                                        onChange={this.handleChange("data")}
                                        value="data"
                                    />
                                }
                                label="Send Usage Data"
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.push}
                                        onChange={this.handleChange("push")}
                                        value="push"
                                    />
                                }
                                label="Allow Push Notifications"
                            />
                        </FormGroup>
                </FormControl>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Settings);