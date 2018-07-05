import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AssignmentIcon from "@material-ui/icons/Assignment";

import Settings from "./Settings";

const styles = theme => ({
    root: {},
    card: {
        margin: 0,
        padding: 0
    },
    cardContent: {
        margin: 0,
        padding: 0
    },
    fluidType: {
        fontSize: "calc(12px + 6 * ((100vw - 320px) / 680))"
    }
});

class SideMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, match } = this.props;
        console.log(this.props);
        return (
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <List component="nav">
                        <Link to={`${match.url}`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Quizzes" />
                            </ListItem>
                        </Link>
                        <Divider />
                        <Link to={`${match.url}/settings`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <AccountBoxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Account Settings" />
                            </ListItem>
                        </Link>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <AssignmentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Spoof Text here" />
                        </ListItem>
                        <Divider />
                    </List>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(SideMenu);
