import React from "react";

function MonFooter(props) {

    const nom = props.nom;
    const formattedNom = nom.toUpperCase();

    return (

        <footer>
            <p>Nom: {formattedNom}</p>
            <p>Prénom: {props.prenom}</p>
            <p>Session {props.session}</p>
        </footer>

    )
}

export default MonFooter;