import './Person.css'
import person_logo from '../../images/person_logo.png'
import cancel_logo from '../../images/cancel_logo.png'

function Person(props) {
    const deleteFromRoom = () => {
        console.log("TODO")
    }

    return (
        <div className="person-main-container">
            <img src={person_logo} alt="Logo" className="people-logo"/>
            <p>{props.people.name}</p>
            <button><img className="delete-person-button" src={cancel_logo} alt="Logo" onClick={deleteFromRoom}/></button>
        </div>
    )
}

export default Person;