import './Navbar.css'
import config from '../../config/config'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import Building from '../Building/Building';
import Settings from '../Settings/Settings';

function Navbar() {
    const parsedConfig = JSON.parse(JSON.stringify(config));
    const buildingName = parsedConfig.building.name
    const spaces = parsedConfig.spaces

    return (
        <BrowserRouter>
            <div className="navbar-container">
                <h4>{buildingName}</h4>
                <div className="navbar">
                    {
                        spaces.map((space) => {
                            return (
                                <NavLink 
                                    key={"nl"+space.id}
                                    to={"/"+space.id}
                                    activeStyle={{ fontWeight: 'bold' }}
                                    style={{ color: 'inherit', textDecoration: 'inherit', fontWeight: 'normal'}}
                                >
                                    <p>{space.name}</p>
                                </NavLink>
                            )
                        })
                    }
                    <p>_________</p>
                    <NavLink
                        to="/settings"
                        activeStyle={{ fontWeight: 'bold' }}
                        style={{ color: 'inherit', textDecoration: 'inherit', fontWeight: 'normal'}}
                    >
                        <p>Paramètres</p>
                    </NavLink>
                    <NavLink
                        to="/"
                        activeStyle={{ fontWeight: 'bold' }}
                        style={{ color: 'inherit', textDecoration: 'inherit', fontWeight: 'normal'}}
                    >
                        <p>Acceuil</p>
                    </NavLink>
                </div>
            </div>
            <Switch>
                {
                    spaces.map((space) => {
                        return (
                            <Route key={space.id} path={"/"+space.id}>
                                <div className="main-container">
                                    <Building building={space}></Building>
                                </div>
                            </Route>
                        )
                    })
                }
                <Route path="/settings">
                    <div className="main-container">
                        <Settings></Settings>
                    </div>
                </Route>
                <Route path="/">
                    <div className="main-container">
                        <Welcome></Welcome>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Navbar;