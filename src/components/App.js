import {Component} from 'react'
import RatingStars from './stars/RatingStars'

export default class App extends Component {

    constructor(props) {

        super(props)
        this.stars = 5
        this.state = {

            checkedStars: 0
        }

        this.onRate = this.onRate.bind(this)
    }

    onRate(starIndex) {

        this.setState({checkedStars: starIndex + 1})
    }

    render() {

        return (

            <RatingStars starNum={this.stars} onStarRate={(ind) => this.onRate(ind)} checkedStars={this.state.checkedStars}/>
        )
    }
}
