import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import SideMenu from './SideMenu';
import QuizContainer from './QuizContainer';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 7,
        border: '1px solid pink',
        paddingBottom: theme.spacing.paddingBottom
    }
});

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeComponent: "ahhh"
        };
    }
    handlePageChange = (event) => {
        const component = event.component;
        this.setState({
            activeComponent: component
        });
    } 
    render() {
        const { classes } = this.props;
        const { activeComponent } = this.state;
        return (
            <Grid 
                className={classes.root} 
                container={true}
                direction="row"
                justify="space-around"
                spacing={40}
            >
                <Grid item xs={4} lg={3}>
                    <SideMenu handleChange={this.handlePageChange} />
                </Grid>
                <Grid item xs={8} lg={9}>
                    {activeComponent}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Dashboard);
