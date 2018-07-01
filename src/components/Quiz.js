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
        questionText: 'How many questions are there here?',
        options: [
            'One',
            'Three',
            'No',
            'True'
        ],
        answer: 'd'
    },
    {
        questionText: 'How many are there are there really?',
        options: [
            'Jaden Smith',
            'Mirrors are eyes to our mirrors',
            'Yeah probably same here',
            'Agreed'
        ],
        answer: 'c'
    },
    {
        questionText: 'Hey it\'s me, ur brother',
        options: [
            'No',
            'No u',
            'Yes me',
            'No rly'
        ],
        answer: 'a'
    }
];

const styles = theme => ({
    root: {
        paddingBottom: theme.spacing.unit * 30
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
                        <Grid item container>
                            <Typography variant="title">
                                Question {questionNum}
                            </Typography>
                            <QuizQuestion content={this.state.quiz[this.state.questionNum - 1]} />
                            <Button variant="raised" color="primary" onClick={this.handleQuestionSubmit}>
                                Next
                            </Button>
                        </Grid>
                    ) : (
                        <Grid item container direction="column">
                            <Typography variant="display4" color="primary">
                                ur done
                            </Typography>
                            <Button variant="raised" color="primary" onClick={this.handleFinishQuiz}>
                                <Typography variant="body1">
                                    Submit
                                </Typography>
                            </Button>
                        </Grid>
                    )
                }
                
            </Grid>
        );
    }
}

export default Quiz;
