import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    root: {
        padding: 20
    }
});

class QuizQuestion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: 0
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid item container direction="column" className={classes.root}>
                {this.props.content.map((option, idx) => {
                    return (
                        <Grid item key={idx}>
                            <FormControlLabel
                                control={<Checkbox value={option} />}
                                label={<Typography variant="headline">{option}</Typography>}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
}

export default withStyles(styles)(QuizQuestion);
