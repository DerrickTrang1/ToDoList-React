import { useState } from "react"
import { useEffect } from "react";

import Card from "./Card.jsx"
import CardAdder from "./CardAdder.jsx"
function MainCardDisplay() {
    const [NavState, SetNavState] = useState("home")
    
    const [SectionAmount, SetSectionAmount] = useState(["test1", "test2", "test3"]
    );
    const [DataFromCardAdder, SetDataFromChildAdder] = useState();

    const RecievedDataFromCardAdder = (CardAdderData) => {
        SetSectionAmount([...SectionAmount, CardAdderData])
    }



    const displaySectionCard =  SectionAmount.map(item => <Card name={item}/>)

        return (
            <>
            <CardAdder state={NavState} adderdata={RecievedDataFromCardAdder}/>
            <div className="carddisplaygrid">
                {displaySectionCard}
            </div>
            </>
        
    );
}
export default MainCardDisplay