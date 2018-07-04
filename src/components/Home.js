import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import BackgroundImage from "../images/rawpixel-unsplash-computer.jpg";

const styles = theme => ({
    root: {
        paddingBottom: theme.spacing.paddingBottom,
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        border: "5px solid red"
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
    cardContent: {
        display: "flex",
        flexDirection: "column"
    },
    headlineCard: {
        paddingLeft: "25vw",
        paddingTop: "15vh"
    },
    headline: {
        fontFamily: '"Anton"'
    }
});

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid
                className={classes.root}
                container
                alignItems="center"
                direction="column">
                <Grid
                    item
                    container
                    align="flex-start"
                    className={classes.headlineCard}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography
                                variant="display3"
                                className={classes.headline}>
                                Quapp is cool please use quapp
                            </Typography>
                            <Typography variant="headline">
                                Quapp is the app that does app things like
                                things that apps do. Get Quapp in your life now.
                                Just do it.
                            </Typography>
                            <Grid container item>
                                <Link to="/signup" style={{alignSelf: "flex-end"}}>
                                    <Button variant="raised" color="primary" className={classes.headlineButton}>
                                        Sign up for free
                                    </Button>
                                </Link>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Home);
