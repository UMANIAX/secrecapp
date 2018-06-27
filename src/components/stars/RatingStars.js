

// const RatingStars = ({starNum, onStarRate, checkedStars}) =>
//     <div>
//         {[...Array(starNum)].map((acc, ind) => <Star key={ind} checked={ind < checkedStars} onStarClick={() => onStarRate(ind)}/>)}
//     </div>
//
// export default RatingStars

import {Component} from 'react'
import Star from './Star'

export default class RatingStars extends Component {

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

            <div>
                {[...Array(this.stars)].map((acc, ind) => <Star key={ind} checked={ind < this.state.checkedStars} onStarClick={() => this.onRate(ind)}/>)}
            </div>
        )
    }
}
