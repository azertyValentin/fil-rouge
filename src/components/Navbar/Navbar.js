import './Navbar.css'
import config from '../../config/config'

function Navbar() {
    const parsedConfig = JSON.parse(JSON.stringify(config));
    const buildingName = parsedConfig.building.name
    const spaces = parsedConfig.spaces

    return (
        <div className="navbar-container">
            <h4>{buildingName}</h4>
            <ul>
                {spaces.map((space, i) =>
                    <li key={i}>{space.name}</li>
                )}
            </ul>
        </div>
    )
}

export default Navbar;