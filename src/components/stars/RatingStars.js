// const RatingStars = ({starNum, onStarRate, checkedStars}) =>
//     <div>
//         {[...Array(starNum)].map((acc, ind) => <Star key={ind} checked={ind < checkedStars} onStarClick={() => onStarRate(ind)}/>)}
//     </div>
//
// export default RatingStars
import Star from './Star'

const RatingStars = ({ratingUpdate, starRates}) =>
    <div>
        {[...Array(5)].map((acc, ind) => <Star key={ind} checked={ind < starRates} onStarClick={() => ratingUpdate(ind + 1)}/>)}
    </div>


export default RatingStars