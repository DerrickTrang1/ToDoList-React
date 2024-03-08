import { useState } from "react";


function CardAdderAdder({ state, adderdata }) {
    const [Title, SetTitle] = useState("Type Title");
    const [Text, SetText] = useState("Type To DO")


    const HandleChangeOnTitle = (event) => {
        SetTitle(event.target.value);
    }

    const HandleChangeOnText = (event) => {
        SetText(event.target.value);
    }

    const SendDataFromAdderToMainCardDisplayClick = () => {
        adderdata([Title,Text]);        
    }


    if (state == "adder") {
        return(
            <div className="outercard">
                <div className="cardAdder">
                    <h1><u>Add Card</u></h1>
                    <input type="text" name="title-card" id="title" placeholder="ToDO title" onChange={HandleChangeOnTitle}/>
                    <textarea id="free form" rows={4} column={4} placeholder="Type new ToDo" onChange={HandleChangeOnText}></textarea>
                </div>
                <div className="addbutton">
                    <button onClick={SendDataFromAdderToMainCardDisplayClick}>+</button>
                </div>
                <div className="cardresults">
                    <h1><u>{Title}</u></h1>
                    <p>{Text}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }

}

export default CardAdder