import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import BackgroundImage from "../images/hero-image.jpg";
import QuappImage from "../images/quapp-dashboard.png";

const styles = theme => ({
    root: {
        paddingBottom: theme.spacing.paddingBottom,
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "0 80%"
    },
    grid1: {},
    grid2: {
        backgroundImage: `linear-gradient(155deg, rgba(233,234,238, 0.8), rgba(201,206,209, 0.85))`
    },
    grid3: {
        padding: 150,
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
        maxWidth: 500,
        boxShadow:
            "0px 1px 50px 0px rgba(0, 0, 0, 0.2), 0px 1px 3px 0px rgba(0, 0, 0, 0.14), 0px 4px 1px -1px rgba(0, 0, 0, 0.12)",
        backgroundColor: "rgba(255, 255, 255, 0)"
    },
    cardContent1: {
        display: "flex",
        flexDirection: "column"
    },
    headlineGrid: {
        paddingTop: "15vh",
        paddingBottom: "15vh",
        width: "75%",
        alignItems: "center"
    },
    headline: {
        fontFamily: '"Anton"',
        textAlign: "center",
        marginBottom: 25
    },
    headline2: {
        marginBottom: 25
    },
    headlineGrid2: {
        paddingTop: "5vh",
        paddingBottom: "5vh",
        justifyContent: "space-around",
        alignItems: "center",
        width: "50%"
    },
    card2: {
        width: 600,
        maxWidth: 600
    },
    cardContent2: {
        minWidth: 5
    },
    section2Typography: {
        color: "#000",
    },
    section2Headline: {
        fontFamily: '"Anton"'
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%'
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
                        direction="column"
                        alignItems="center"
                        wrap="nowrap"
                        justify="space-between"
                        className={classes.headlineGrid}>
                        <Typography
                            variant="display3"
                            className={classes.headline}>
                            A realtime quiz application that makes testing
                            simple and quick.
                        </Typography>
                        <Typography
                            variant="headline"
                            className={classes.headline2}>
                            Create, administer, and manage quizzes, and get live
                            results.
                        </Typography>
                        <Link to="/signup">
                            <Button
                                variant="raised"
                                color="primary"
                                className={classes.headlineButton}>
                                Sign up for free
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container className={classes.grid2} direction="column" alignItems="center">
                    <Grid item container className={classes.headlineGrid2}>
                        <Typography
                            className={classes.section2Headline}
                            variant="display3">
                            A better way to take tests
                        </Typography>
                        <Typography
                            className={classes.section2Typography}
                            variant="headline"
                            style={{marginBottom: 35}}>
                            Make pen and paper tests a thing of the past. Quapp offers a simple-to-use platform that let's you make, take, and manage tests with ease. Quapp is a lightweight, versatile solution for organizing tests in a single place without the need to run to the printer.
                        </Typography>
                        <Button variant="raised" color="primary">
                            Learn More
                        </Button>
                    </Grid>
                </Grid>
                <Grid container className={classes.grid3} justify="space-between">
                    <Card className={classes.card2}>
                        <CardContent>
                            <Typography variant="display3">
                                Study with others
                            </Typography>
                            <Typography variant="headline">
                                Quapp isn't just for the classroom. Create quizzes for you and your study group to practice with!
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.card2}>
                        <CardMedia image={QuappImage} title="quapp-dashboard" className={classes.cardMedia}/>
                    </Card>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
