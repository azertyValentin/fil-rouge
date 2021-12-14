import './Person.css'
import person_logo from '../../images/person_logo.png'
import cancel_logo from '../../images/cancel_logo.png'
import { connect } from 'react-redux'

function Person(props) {
    const deleteFromRoom = () => {
        props.dispatch({
            type: 'REMOVE_PERSON',
            payload: props.people
        })
    }

    return (
        <div className="person-main-container">
            <img src={person_logo} alt="Logo" className="people-logo"/>
            <p>{props.people.name}</p>
            <button><img className="delete-person-button" src={cancel_logo} alt="Logo" onClick={deleteFromRoom}/></button>
        </div>
    )
}

const mapStateToProps = state => {
    return { peoples: state.peoples }
}

const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);