import Room from '../Room/Room';
import UnasignedPeoples from '../UnasignedPeoples/UnasignedPeoples';
import './Building.css'

function Building(props) {
    return (
        <div>
            <h2>{props.building.name}</h2>
            <p><b>Help :</b> Vous pouvez retirer une personne d'une salle en cliquant sur la corbeille.</p>
            <UnasignedPeoples rooms={props.building.rooms}></UnasignedPeoples>
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