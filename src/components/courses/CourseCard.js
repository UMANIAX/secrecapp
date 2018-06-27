import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import RatingStars from '../stars/RatingStars'


const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function CourseCard(props) {
    const { classes, courseName, courseFaculty } = props;
    const bull = <span className={classes.bullet}>•</span>;
    console.log(props)
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        {courseName}
                    </Typography>
                    <Typography component="p">
                        {courseFaculty}
                    </Typography>
                </CardContent>
                <CardActions>
                    <RatingStars />
                </CardActions>
            </Card>
        </div>
    );
}

CourseCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseCard);


