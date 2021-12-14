import Room from '../Room/Room';
import './Building.css'

function Building(props) {
    return (
        <div>
            <h2>{props.building.name}</h2>
            {
                props.building.rooms.map((room) => {
                    return (
                        <Room key={room.id} room={room}></Room>
                    )
                })
            }
        </div>
    )
}

export default Building;