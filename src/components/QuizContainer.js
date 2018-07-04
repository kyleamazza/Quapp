import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Divider from "./Divider";

const styles = theme => ({
    quizContainer: {
        padding: '20px 0'
    },
    card: {
        width: '100%'
    },
    quizCard: {
        width: '100%',
        height: 100,
        maxHeight: 100
    },
    cardButton: {
        width: '100%'
    }
});

class QuizContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeQuizzes: [
                {
                    title: "Quiz 5",
                    class: "CECS 341"
                },
                {
                    title: "Practice Quiz",
                    class: "CECS 1234"
                },
                {
                    title: "Open Book Exam 2",
                    class: "CECS 343"
                },
                {
                    title: "Closed Book Exam 2",
                    class: "CECS 343"
                }
            ],
            pastQuizzes: [
                {
                    title: "Open Book Exam 1",
                    class: "CECS 341"
                }
            ]
        };
    }
    render() {
        const { classes } = this.props;
        const { activeQuizzes, pastQuizzes } = this.state;
        return (
            <Grid
                className={classes.quizContainer}
                container
                direction="column">
                <Grid item>
                    <Typography variant="headline">Active Quizzes</Typography>
                    <Divider />
                    <Grid item container>
                        {activeQuizzes.map((quiz, idx) => {
                            return (
                                <Grid item xs={4} key={idx}>
                                    <Card className={classes.card}>
                                        <Button
                                            className={classes.cardButton}
                                            component={Link}
                                            to="/quiz">
                                            <CardContent
                                                className={classes.quizCard}>
                                                <Typography
                                                    variant="title"
                                                    component="h3">
                                                    {quiz.title}
                                                </Typography>
                                                <Divider />
                                                <Typography
                                                    variant="body1"
                                                    component="p">
                                                    {quiz.class}
                                                </Typography>
                                            </CardContent>
                                        </Button>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="headline">Past Quizzes</Typography>
                    <Divider />
                    <Grid item container>
                        {pastQuizzes.map((quiz, idx) => {
                            return (
                                <Grid item xs={4} key={idx}>
                                    <Card className={classes.card}>
                                        <Button
                                            className={classes.cardButton}
                                            component={Link}
                                            to="/quiz">
                                            <CardContent
                                                className={classes.quizCard}>
                                                <Typography
                                                    variant="title"
                                                    component="h3">
                                                    {quiz.title}
                                                </Typography>
                                                <Divider />
                                                <Typography
                                                    variant="body1"
                                                    component="p">
                                                    {quiz.class}
                                                </Typography>
                                            </CardContent>
                                        </Button>
                                    </Card>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(QuizContainer);
