import Card from './Card.jsx'
import MainCardDisplay from './MainCardDisplay.jsx';
function Body() {
    return (
        <>

        <div className="wholeBody">
            <div className="bodysidebar"></div>
            <div className="mainbody">
                <h1>Content Page</h1>
                    
                    <MainCardDisplay></MainCardDisplay>
            </div>
            <div className="bodysidebar"></div>
        </div>
        </>
    );
}
export default Body