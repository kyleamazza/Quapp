import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';

import MenuBar from './MenuBar';
import Footer from './Footer';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import Quiz from './Quiz';
import FourOhFour from './FourOhFour';

const styles = theme => ({
    root: {
        position: 'relative',
        minHeight: '100%'
    }
});

class MainRouter extends React.Component {
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <MenuBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/quiz" component={Quiz} />
                    <Route path="*" component={FourOhFour} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withStyles(styles)(MainRouter);
