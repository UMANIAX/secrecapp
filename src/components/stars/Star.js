import style from '../../stylesheets/star.css'

const Star = ({checked = true, onStarClick}) =>
    <span className={checked ? `fa fa-star ${style.check}` : "fa fa-star"} onClick={onStarClick}/>

export default Star