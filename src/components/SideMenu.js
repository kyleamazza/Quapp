import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AssignmentIcon from '@material-ui/icons/Assignment';

const styles = theme => ({
    root: {

    },
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
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <List component="nav">
                        <ListItem button>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Blah" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText classes={{primary: classes.fluidType}} primary="Account Settings" />
                        </ListItem>
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
