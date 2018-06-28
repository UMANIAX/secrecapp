import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Component} from 'react'

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

class DoctorCard extends Component {

    constructor (props){

        super(props)
        this.state = {

            rating: 0
        }
    }

    componentWillMount () {

        this.style = {backgroundColor:'#ccc'}
    }

    componentWillUpdate () {

        let randomColor = '#' + [...Array(6)].map(() => (parseInt(Math.random() * 16)).toString(16)).join('')
        this.style = {backgroundColor: randomColor}
    }

    render () {

        const {classes, courseName, courseFaculty} = this.props;
        return (
            <div>
                <Card className={classes.card} style={this.style}>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            {courseName}
                        </Typography>
                        <Typography component="p">
                            {courseFaculty}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <RatingStars ratingUpdate={rate => this.setState({rating: rate})}/>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

DoctorCard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DoctorCard);


