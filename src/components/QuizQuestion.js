import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import QuizOptions from "./QuizOptions";

const styles = theme => ({
    root: {
        
    }
});

class QuizQuestion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const question = this.props.content;
        const { classes } = this.props;
        return (
            <Grid className={classes.root} item container direction="column">
                <Typography variant="display2">
                    {question.questionText}
                </Typography>
                <QuizOptions content={question.options} />
            </Grid>
        );
    }
}

export default withStyles(styles)(QuizQuestion);
