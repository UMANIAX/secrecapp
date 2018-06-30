import PropTypes from 'prop-types'
import {Component} from 'react'

import {addDoc} from '../../actions'

class NewDoctorForm extends Component {

    submit = e => {

        e.preventDefault()

        const {_docName, _docSpec, _docRate} = this.refs

        const {store} = this.context
        store.dispatch(addDoc(_docName.value, _docSpec.value, _docRate.value))

        _docName.value = ''
        _docSpec.value = ''
        _docRate.value = ''
        _docName.focus()
    }

    render() {

        return (
            <form onSubmit={this.submit}>
                <input type='text' ref='_docName' placeholder='Name of The Doctor' required/>
                <input type='text' ref='_docSpec' placeholder='Speciality of The Doctor' required/>
                <input type="number" min="0" max="5" ref='_docRate' placeholder='Rate Him/Her'
                       required/>
                <button>Add</button>
            </form>
        )
    }

}

NewDoctorForm.contextTypes = {
    store: PropTypes.object
}

export default NewDoctorForm