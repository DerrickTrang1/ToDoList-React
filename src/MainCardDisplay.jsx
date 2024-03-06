import { useState } from "react"
import Card from "./Card.jsx"
import CardAdderRemover from "./CardAdderRemover.jsx"
function MainCardDisplay() {
    const [SectionAmount, SetSectionAmount] = useState(
        
        [
        [["First Project", "hi" ],[" Second Project", "second"],[ "Third Project", "third"]],
        [[]]
        
    
        ]
    );
    const [DataFromCardAdder, SetDataFromChildAdder] = useState();
    const [DataFromCardRemover, SetDataFromChildRemover] = useState();



    const RecievedDataFromCardAdder = (CardAdderData) => {
        SetDataFromChildAdder([CardAdderData])
        SetSectionAmount([...SectionAmount, CardAdderData])
    }

    const RecievedDataFromCardRemover = (CardRemoverData) => {

    }


    

    const displaySectionCard =  SectionAmount.map(listOfListCards => listOfListCards.map(listCardItem =>
                                                <>
    
                                                <div className="verticalcolumncard">
                                                <div className="block">
                                                <Card name={listCardItem[0]} cardinformation={listCardItem[1]}></Card> 
                                                </div>
                                                </div>
                                                </>));
    
        console.log(SectionAmount);
        return (
            
            <>
            <CardAdderRemover state={"adder"} adderdata={RecievedDataFromCardAdder}></CardAdderRemover>
            {displaySectionCard}
            </>
        
    );
}
export default MainCardDisplay