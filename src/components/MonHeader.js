import React, { useEffect, useState } from "react";

function MonHeader() {
    // Stocker l'heure actuelle et la date en état
    const [time, setTime] = useState(new Date());

    // Mettre à jour l'heure chaque seconde
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date()); 
        }, 1000);

        // Nettoyer l'intervalle lors du démontage du composant
        return () => clearInterval(interval);
    }, []);

    // Formater la date et l'heure en français
    const formattedDate = time.toLocaleDateString("fr-FR", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const formattedTime = time.toLocaleTimeString("fr-FR");

    return (
        <div>
            <h1>On est <b>{formattedDate}</b>, il est <b>{formattedTime}</b></h1>
        </div>
    );
}

export default MonHeader;
