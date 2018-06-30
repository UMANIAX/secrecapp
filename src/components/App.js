import DoctorsInfo from './doctorComps/DoctorsInfo'
import {Component} from 'react'
import PropTypes from 'prop-types'

class App extends Component {

    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render(){

        const docData = store.getState()
        return(
            <DoctorsInfo docList={docData} />
        )
    }
}

App.childContextTypes = {

    store: PropTypes.object.isRequired
}

export default App