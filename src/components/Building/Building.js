import Room from '../Room/Room';
import UnasignedPeoples from '../UnasignedPeoples/UnasignedPeoples';
import './Building.css'

function Building(props) {
    return (
        <div>
            <h2>{props.building.name}</h2>
            <p><b>Help :</b> Vous pouvez choisir la salle dans laquelle ajouter du personnel à l'aide du menu déroulant sur la droite.</p>
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