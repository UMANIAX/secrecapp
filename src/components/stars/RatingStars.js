import Star from './Star'

const RatingStars = ({starNum, onStarRate, checkedStars}) =>
    <div>
        {[...Array(starNum)].map((acc, ind) => <Star key={ind} checked={ind < checkedStars} onStarClick={() => onStarRate(ind)}/>)}
    </div>

export default RatingStars