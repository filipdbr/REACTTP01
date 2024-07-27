import React, { useEffect, useState } from "react";

function Horloge() {

    // stocker l'heure actuelle en etat
    const [time, setTime] = useState(new Date())
    
    // mettre le temps a jour
    const TimeNow = () => {
        setTime(new Date());
    }

    //useEffect pour lancer l'interval
    useEffect(() => {
        
        const interval = setInterval(TimeNow,1000);

        return() => clearInterval(interval);
    },[],);

    //format
    const formattedTime = time.toLocaleTimeString("fr-FR")

    return (
        <h1>{formattedTime}</h1>
    )
}

export default Horloge;