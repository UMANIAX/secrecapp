import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import RatingStars from '../stars/RatingStars'
import {rateDoc} from '../../actions'

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

    componentWillMount () {

        this.style = {backgroundColor:'#ccc'}
    }

    shouldComponentUpdate(nextProps, nextState){

        return nextProps.rating !== this.props.rating
    }

    componentWillUpdate () {

        let randomColor = '#' + [...Array(6)].map(() => (parseInt(Math.random() * 16)).toString(16)).join('')
        this.style = {backgroundColor: randomColor}
    }

    render () {

        const {classes, id, name, speciality, rating} = this.props
        const {store} = this.context
        return (
            <div>
                <Card className={classes.card} style={this.style}>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            {name}
                        </Typography>
                        <Typography component="p">
                            {speciality}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <RatingStars starRates={rating} ratingUpdate={rate => store.dispatch(rateDoc(id, rate))}/>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

DoctorCard.contextTypes = {
    store: PropTypes.object
}

DoctorCard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DoctorCard)