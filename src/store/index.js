import {createStore, applyMiddleware} from 'redux'
import initState from '../../data/docsInfo'
import {docs} from './reducers'

const saveToLocal = store => next => action => {

    next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
}

const storeFactory = (state = initState) =>
    applyMiddleware(saveToLocal)(createStore)(
        docs,
        localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : state
    )

export default storeFactory