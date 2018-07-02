import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '75%',
        margin: `20vh auto`,
        paddingBottom: theme.spacing.paddingBottom
    },
    button: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.light,
        padding: '50px 100px'
    }
});

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.root} 
                container
                justify="space-around"
                direction="row"
            >
                <Grid item>
                    <Link to="/login">
                        <Button className={classes.button} variant="raised" size="large">
                            <Typography variant="headline">
                                Student
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/login">
                        <Button className={classes.button} variant="contained" size="large">
                            <Typography variant="headline">
                                Teacher
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Home);
