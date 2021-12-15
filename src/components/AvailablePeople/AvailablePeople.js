import './AvailablePeople.css'
import person_logo from '../../images/person_logo.png'
import add_logo from '../../images/add_logo.png'

function AvailablePeople(props) {
    return (
        <div className="available-people-main-container">
            <img src={person_logo} alt="Logo" className="people-logo"/>
            <p>{props.people.name}</p>
            <button><img className="add-person-button" src={add_logo} alt="Logo" onClick={() => props.addToRoom(props.people)}/></button>
        </div>
    )
}

export default AvailablePeople;