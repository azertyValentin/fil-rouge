import './Room.css'
import { connect } from 'react-redux'
import Person from '../Person/Person'

function Room(props) {
    const displayIsEmptyMessage = () => {
        if(props.peoples.filter(people => people.affected_room === props.room.id).length === 0) {
            return (<p>Il n'y a actuellement aucune personne dans cette salle.</p>)
        }
    }

    return (
        <div className="room-container">
            <p><b>Salle {props.room.name}</b></p>
            {
                props.peoples.filter(people => people.affected_room === props.room.id).map((people) => {
                    return (
                        <Person key={people.id} room={props.room} people={people}></Person>
                    )
                })
            }
            {
                displayIsEmptyMessage()
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(Room);