import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import BackgroundImage from "../images/hero-image.jpg";

const styles = theme => ({
    root: {
        paddingBottom: theme.spacing.paddingBottom
    },
    grid1: {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        border: "5px solid red"
    },
    grid2: {
        border: "5px solid purple",
        padding: 50,
        backgroundImage: `linear-gradient(155deg, ${
            theme.palette.primary.dark
        }, ${theme.palette.primary.light})`
    },
    grid3: {
        padding: 150,
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        border: "5px solid red",
        paddingBottom: theme.spacing.paddingBottom
    },
    button: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark,
        padding: "50px 100px"
    },
    headlineButton: {
        padding: "25px 50px",
        fontFamily: '"Helvetica"',
        marginRight: 0
    },
    white: {
        color: theme.palette.primary.contrastText
    },
    card: {
        maxWidth: 500
    },
    cardContent1: {
        display: "flex",
        flexDirection: "column"
    },
    headlineGrid: {
        paddingLeft: "20vw",
        paddingTop: "15vh",
        paddingBottom: "15vh"
    },
    headline: {
        fontFamily: '"Anton"'
    },
    headlineGrid2: {
        paddingTop: "15vh",
        paddingBottom: "15vh",
        justifyContent: "space-around"
    },
    card2: {
        maxWidth: 600
    },
    cardContent2: {
        minWidth: 5
    }
});

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid
                    className={classes.grid1}
                    container
                    alignItems="center"
                    direction="column">
                    <Grid
                        item
                        container
                        align="flex-start"
                        className={classes.headlineGrid}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                                <Typography
                                    variant="display3"
                                    className={classes.headline}>
                                    Quapp is cool please use quapp
                                </Typography>
                                <Typography variant="headline">
                                    Quapp is the app that does app things like
                                    things that apps do. Get Quapp in your life
                                    now. Just do it.
                                </Typography>
                                <Grid container item>
                                    <Link
                                        to="/signup"
                                        style={{ alignSelf: "flex-end" }}>
                                        <Button
                                            variant="raised"
                                            color="primary"
                                            className={classes.headlineButton}>
                                            Sign up for free
                                        </Button>
                                    </Link>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container className={classes.grid2}>
                    <Grid item container className={classes.headlineGrid2}>
                        <Card className={classes.card2}>
                            <CardContent>
                                <Typography variant="display3">
                                    Sample header 2
                                </Typography>
                                <Typography variant="headline">
                                    lorem ipsum dolor sit amet consectitur sit
                                    amet lorem ipsum dolor sit amet consectitur
                                    sit amet lorem ipsum dolor sit amet
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.card2}>
                            <Typography variant="headline">
                                lorem ipsum dolor sit amet consectitur sit amet
                                lorem ipsum yes hi its me
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container className={classes.grid3}>
                    <Card className={classes.card2}>
                        <CardContent>
                            <Typography variant="display3">
                                Sample header2
                            </Typography>
                            <Typography variant="headline">
                                lorem ipsum dolor sit amet consectitur sit amet
                                lorem ipsum dolor sit amet consectitur sit amet
                                lorem ipsum dolor sit amet
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
