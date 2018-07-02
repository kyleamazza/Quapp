import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 12,
        paddingBottom: theme.spacing.paddingBottom
    },
    card: {
        maxWidth: '35vw',
        minWidth: 300,
        padding: theme.spacing.unit * 3,
        margin: 'auto',
    },
    loginContainer: {
        display: 'flex',
        maxWidth: 250,
        margin: '0 auto',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        maxWidth: 400,
        width: 250,
        '&:last-of-type': {
            marginBottom: theme.spacing.unit * 5
        }
    },
    error: {
        marginBottom: theme.spacing.unit * 3
    },
    errorIcon: {
        verticalAlign: 'middle',
    },
    title: {
        alignSelf: 'flex-start'
    },
    submitButton: {
        marginBottom: theme.spacing.unit,
        width: '100%'
    }
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            redirectToReferrer: '',
            openDialog: false
        };
    }

    handleInputChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = () => {
        // Can use redux here to set App state auth to true
        // TODO: Hook up route to authentication then login through Firebase Auth and Database
        // TODO: Get authentication token/whatever from Firebase
        // TODO: OAuth Google authentication via Firebase
        const user = {
            email: this.state.email || '',
            password: this.state.password || ''
        };
        if (user.password.length < 6) {
            this.setState({error: 'Password error (replace this)' });
        } else {
            console.log('Logged in');
            this.setState({ redirectToReferrer: true });
        }
        return false;
    }

    showDialog = () => {
        this.setState({
            openDialog: true
        });
    }

    handleDialogClose = () => {
        this.setState({
            openDialog: false
        });
    }

    render() {
        if (this.state.redirectToReferrer) {
            return (
                <Redirect to="/dashboard" />
            );
        }
        const { classes, onClose, selectedValue } = this.props;
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid className={classes.loginContainer}>
                            <Typography variant="headline" component="h2" className={classes.title}>
                                    Login
                            </Typography>
                            <div className={classes.formContainer}>
                                <TextField
                                    id="email"
                                    type="text"
                                    label="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="password"
                                    type="password"
                                    label="Password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    className={classes.textField}
                                    margin="normal"
                                />
                                {
                                    this.state.error && (
                                        <Typography component="p" color="error" className={classes.error}>
                                            <Icon color="error" className={classes.errorIcon}>
                                                error
                                            </Icon>
                                            {this.state.error}
                                        </Typography>
                                    )
                                }
                                <Button className={classes.submitButton} color="primary" variant="raised" onClick={this.handleFormSubmit}>
                                    Log In
                                </Button>
                                <Button className={classes.submitButton} color="secondary" variant="text" onClick={this.showDialog}>
                                    Forgot Password?
                                </Button>
                            </div>
                        </Grid>
                    </CardContent>
                </Card>
                <Dialog open={this.state.openDialog} onClose={this.handleDialogClose} aria-labelledby="forgot-password-dialog-title">
                    <DialogTitle>
                        Forgot Password
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            TODO: Some helper text here about how you can recover your password lorem ipsum dolor sit amet consectitur somethingsomething i dont speak fake latin
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="raised" color="primary">
                            <Link to="/">
                                Link to nowhere right now
                            </Link>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
};

export default withStyles(styles)(Login);
