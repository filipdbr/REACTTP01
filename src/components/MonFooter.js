import React from "react";

function MonFooter(props) {

    // defining last name and a proper format 
    const nom = props.nom;
    const formattedNom = nom.toUpperCase();

    return (

        // returning all required data using props
        <footer>
            <p>Nom: {formattedNom}</p>
            <p>Prénom: {props.prenom}</p>
            <p>Session {props.session}</p>
        </footer>

    )
}

export default MonFooter;