import './UnasignedPeoples.css'
import {useState} from 'react'
import { connect } from 'react-redux'
import AvailablePeople from '../AvailablePeople/AvailablePeople';

function UnasignedPeoples(props) {
    const [selectedRoom, setselectedRoom] = useState(props.rooms[0].id);

    const changeSelectedRoom = (e) => {
        setselectedRoom(e.target.value)
    }

    return (
        <div className="unasigned-people-main-container">
            <div className="unasigned-people-sub-container">
                <p>Ajouter des personnes à la salle  
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
                    props.peoples.filter(people => people.affected_room === 0).map((people) => {
                        return (
                            <AvailablePeople key={people.id} people={people}></AvailablePeople>
                        )
                    })
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