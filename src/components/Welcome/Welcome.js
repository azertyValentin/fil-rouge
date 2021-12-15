import './Welcome.css'

function Welcome() {
    return (
        <div>
            <h2 className="welcome-title">Bienvenue sur le projet Fil Rouge</h2>
            <p>Ce projet vous permet de gérer l'affectation de salles et de bureaux d'un bâtiment.</p>
            <p>Vous pouvez modifier la structure du bâtiment (nombre de salles, nom des bâtiments ...) dans le fichier de config : <b>config.json</b>.</p>
            <p>Pour commencer, sélectionner un bâtiment dans le menu de gauche et affecter votre première salle à un membre de votre équipe.</p>
            <p>Vous pouvez également ajouter de nouveaux utilisateurs ou en supprimer dans les paramètres.</p>
            <p>Amusez-vous bien :)</p>
        </div>
    )
}

export default Welcome;