import React from "react";
import { Link, Route } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import SideMenu from "./SideMenu";
import Settings from "./Settings";
import QuizContainer from "./QuizContainer";

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 7,
        border: "1px solid pink",
        paddingBottom: theme.spacing.paddingBottom
    }
});

class Dashboard extends React.Component {
    render() {
        const { classes, match } = this.props;
        console.log(this.props);
        console.log(match);
        return (
            <Grid
                className={classes.root}
                container={true}
                direction="row"
                justify="space-around"
                spacing={40}>
                <Grid item xs={4} lg={3}>
                    <SideMenu match={match} />
                </Grid>
                <Grid item container xs={8} lg={9} justify="flex-start">
                    <Route
                        path={`${match.url}/settings`}
                        component={Settings}
                    />
                    <Route
                        exact
                        path={`${match.url}`}
                        component={QuizContainer}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Dashboard);
