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
    }

    shouldComponentUpdate(nextProps, nextState){

        return this.state.checkedStars !== nextState.checkedStars
    }

    componentWillUpdate() {

        this.props.ratingUpdate()
    }

    render() {

        return (

            <div>
                {[...Array(this.stars)].map((acc, ind) => <Star key={ind} checked={ind < this.state.checkedStars} onStarClick={() => this.setState({checkedStars: ind + 1})}/>)}
            </div>
        )
    }
}
