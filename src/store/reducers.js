import constants from '../constants'

const doc = (state, action) => {

    switch (action.type) {

        case constants.RATE_DOC:
            return (state.id !== action.docID) ? state : {
                ...state,
                rating: action.rating
            }

        default:
            return state
    }
}

export const docs = (state = {}, action) => {

    switch (action.type) {

        case constants.ADD_DOC:
            return [
                ...state,
                {
                    id: action.docID,
                    name: action.docName,
                    speciality: action.docSpec,
                    rating: action.rating
                }
            ]

        case constants.RATE_DOC:
            return state.map(item => doc(item, action))

        default:
            return state
    }
}