import './UnasignedPeoples.css'
import { useState } from 'react'
import { connect } from 'react-redux'
import AvailablePeople from '../AvailablePeople/AvailablePeople';

function UnasignedPeoples(props) {
    const [selectedRoom, setselectedRoom] = useState(props.rooms[0].id);

    const changeSelectedRoom = (e) => {
        setselectedRoom(parseInt(e.target.value))
    }

    const addToRoom = (peopleToAdd) => {
        props.dispatch({
            type: 'ADD_PERSON_TO_ROOM',
            payload: {"selectedRoom" : selectedRoom, "person": peopleToAdd}
        })
    }

    const isSelectedRoomAvailable = () => {
        const availableSpaceInSelectedRoom = props.rooms.find(room => room.id === selectedRoom).available_space
        var numberOfPeopleInSelectedRoom = 0
        props.peoples.forEach(people => {
            if (people.affected_room === selectedRoom) {
                numberOfPeopleInSelectedRoom ++
            }
        })
        return availableSpaceInSelectedRoom > numberOfPeopleInSelectedRoom;
    }

    return (
        <div className="unasigned-people-main-container">
            <div className="unasigned-people-sub-container">
                <p><b>Ajouter des personnes à la salle</b>
                    <select className="room-select" onChange={changeSelectedRoom}>
                        {
                            props.rooms.map((room) => {
                                return (
                                    <option key={room.id} value={room.id}>{room.name}</option>
                                )
                            })
                        }
                    </select>
                </p>
                {
                    isSelectedRoomAvailable() ?
                    props.peoples.filter(people => people.affected_room === 0).map((people) => {
                        return (
                            <AvailablePeople key={people.id} people={people} addToRoom={addToRoom}></AvailablePeople>
                        )
                    }) : <div>
                            <p>Cette salle est actuellement pleine. Vous devez d'abord retirer des personnes de la salle avant de pouvoir en ajouter.</p>
                        </div>
                }
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UnasignedPeoples);