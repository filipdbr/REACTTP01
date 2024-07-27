import React from "react";

function MaDate() {
    // Obtenir la date actuelle et la formater en français
    const currentDate = new Date().toLocaleDateString("fr-FR", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Retourner la date formatée dans un élément h1
    return (
        <p>{currentDate}</p>
    )
}

export default MaDate;
