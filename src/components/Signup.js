import React from 'react';
import { Redirect } from 'react-router-dom';

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
import { withStyles } from '@material-ui/core/styles';

import { auth, db } from '../firebase';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 12,
        flex: 1,
        height: '100%',
        paddingBottom: theme.spacing.unit * 25
    },
    card: {
        maxWidth: '35vw',
        minWidth: 300,
        padding: theme.spacing.unit * 3,
        margin: 'auto',
    },
    signupContainer: {
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
        width: 275,
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
        alignSelf: 'center'
    },
    submitButton: {
        width: '100%'
    }
});

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            error: '',
            redirectToReferrer: ''
        };
    }

    handleInputChange = (event) => {
        const name = event.target.id;
        const value = event.target.value;

        console.log(event.target.id);

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = () => {
        // Can use redux here to set App state auth to true
        // TODO: Hook up route to authentication then signup through Firebase Auth and Database
        // TODO: Get authentication token/whatever from Firebase
        // TODO: OAuth Google authentication via Firebase
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email || '',
            password: this.state.password || ''
        };
        // If ANY field is missing, throw an error
        if (user.password.length < 6) {
            this.setState({error: 'Input error' });
        } else {    
            auth.doCreateUserWithEmailAndPassword(user.email, user.password)
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((err) => {
                console.log("Auth error");
            });
        }
        return false;
    }

    render() {
        if (this.state.redirectToReferrer) {
            return (
                <Redirect to="/" />
            );
        }
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid className={classes.signupContainer}>
                            <Typography variant="headline" component="h2" className={classes.title}>
                                    Sign Up
                            </Typography>
                            <div className={classes.formContainer}>
                                <TextField
                                    id="firstName"
                                    type="text"
                                    label="First name"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="lastName"
                                    type="text"
                                    label="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                    className={classes.textField}
                                    margin="normal"
                                />
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
                                    Sign Up
                                </Button>
                            </div>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        );
    }
};

export default withStyles(styles)(Signup);
