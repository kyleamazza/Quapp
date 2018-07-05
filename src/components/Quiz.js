import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';

import QuizQuestion from './QuizQuestion';

// Temp variable, replace with DB data
const quizFromDB = [
    {
        questionText: 'Inside which HTML element does JavaScript go?',
        options: [
            '<meta>',
            '<link>',
            '<script>',
            'None of the above'
        ],
        answer: 'c'
    },
    {
        questionText: 'Which is not a lifecycle method in React?',
        options: [
            'componentShouldUpdate',
            'componentDidUpdate',
            'componentWillMount',
            'ComponentWillReceiveState'
        ],
        answer: 'd'
    },
    {
        questionText: 'Who will win the World Cup 2018',
        options: [
            'Probably not the USA',
            'Not the USA',
            'Nope not those guys',
            'Not even Mexico? Come on...'
        ],
        answer: 'c'
    }
];

const styles = theme => ({
    root: {
        paddingBottom: theme.spacing.paddingBottom,
        alignItems: "center",
        paddingTop: 65
    },
    quizContainer: {
        width: "45%"
    },
    button: {
        maxWidth: 150,
        alignSelf: "center"
    },
    finishText: {
        color: "#000",
        textAlign: "center",
        paddingTop: 85,
        marginBottom: 80
    }
});

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questionNum: 1,
            quiz: []
        };
    }

    componentWillMount() {
        // Get quiz DB object
        this.setState({
            quiz: quizFromDB
        });
    }

    handleQuestionSubmit = (event) => {
        this.setState({
            questionNum: this.state.questionNum + 1
        });
    }

    handleFinishQuiz = (event) => {
        this.props.history.push('/dashboard');
    }

    render() {
        const { questionNum, quiz } = this.state;
        const { classes } = this.props;
        return (
            <Grid container direction="column" className={classes.root}>
                {
                    questionNum <= quiz.length ? (
                        <Grid item container direction="column" className={classes.quizContainer}>
                            <Typography variant="headline">
                                Question {questionNum}
                            </Typography>
                            <QuizQuestion content={this.state.quiz[this.state.questionNum - 1]} />
                            <Button variant="raised" color="primary" onClick={this.handleQuestionSubmit} className={classes.button}>
                                Next
                            </Button>
                        </Grid>
                    ) : (
                        <Grid item container direction="column" className={classes.quizContainer}>
                            <Typography variant="display2" className={classes.finishText}>
                                Quiz complete!
                            </Typography>
                            <Button variant="raised" color="primary" onClick={this.handleFinishQuiz} className={classes.button}>
                                Submit
                            </Button>
                        </Grid>
                    )
                }
                
            </Grid>
        );
    }
}

export default withStyles(styles)(Quiz);
