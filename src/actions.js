import uuidv4 from 'uuid/v4'
import constants from './constants'

export const addDoc = (docName, docSpec, rating) => ({

    type: constants.ADD_DOC,
    docID: uuidv4(),
    docName: docName,
    docSpec: docSpec,
    rating: rating
})

export const rateDoc = (docID, rating) => ({

    type: constants.RATE_DOC,
    docID: docID,
    rating: rating
})

