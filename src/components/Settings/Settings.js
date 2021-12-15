import './Settings.css'
import { useState } from 'react'
import { connect } from 'react-redux'

function Settings(props) {
    const [newUserName, setNewUserName] = useState("");
    const [aUserWasAdded, setaUserWasAdded] = useState(false);
    const [selectedUserToDelete, setSelectedUserToDelete] = useState(0);
    const [aUserWasRemoved, setaUserWasRemoved] = useState(false);

    const changeSelectedUserToDelete = (e) => {
        setSelectedUserToDelete(parseInt(e.target.value))
    }

    const inputNewUserNameChange = (e) => {
        setNewUserName(e.target.value)
    }

    const addUser = () => {
        if(newUserName === "") {
            setaUserWasAdded(false)
            return;
        }
        props.dispatch({
            type: 'ADD_PERSON',
            payload: newUserName
        })
        setNewUserName('')
        setaUserWasAdded(true)
        setaUserWasRemoved(false)
    }

    const deleteUser = () => {
        props.dispatch({
            type: 'REMOVE_PERSON',
            payload: selectedUserToDelete
        })
        setSelectedUserToDelete(0)
        setaUserWasRemoved(true)
        setaUserWasAdded(false)
    }

    return (
        <div className="settings-main-container">
            <h2>Paramètres</h2>
            <p><b>Ajouter un membre du personnel aux utilisateurs :</b></p>
            <label>Nom du nouvel arrivant : <input type="text" onChange={inputNewUserNameChange} value={newUserName}/></label>
            <button onClick={addUser} className='settings-button' disabled={newUserName === ""}>Ajouter</button>
            {
                aUserWasAdded ? <p className='success-message'>Le nouvel utilisateur a été ajouté avec succès.</p> : <></>
            }
            <p><b>Supprimer un membre du personnel :</b></p>
            <select onChange={changeSelectedUserToDelete}>
                <option value="0">Selectionner l'utilisateur à supprimer</option>
                {
                    props.peoples.map((people) => {
                        return (
                            <option key={people.id} value={people.id}>{people.name}</option>
                        )
                    })
                }
            </select>
            <button onClick={deleteUser} className='settings-button' disabled={selectedUserToDelete === 0}>Supprimer</button>
            {
                aUserWasRemoved ? <p className='success-message'>L'utilisateur a été supprimé avec succès.</p> : <></>
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);