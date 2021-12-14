import './Room.css'
import { connect } from 'react-redux'
import Person from '../Person/Person'
import { useState, useEffect } from 'react';

function Room(props) {
    const [associatedPeople, setAssociatedPeople] = useState([]);

    const getAssociatedPeoples = () => {
        return props.peoples.filter(people => people.affected_room === props.room.id)
    }

    const displayIsEmptyMessage = () => {
        if(associatedPeople.length === 0) {
            return (<p>Il n'y a actuellement aucune personne dans cette salle.</p>)
        }
    }

    useEffect(() => {
        setAssociatedPeople(getAssociatedPeoples())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="room-container">
            <p><b>Room {props.room.name}</b></p>
            {
                associatedPeople.map((people) => {
                    return (
                        <Person key={people.id} people={people}></Person>
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