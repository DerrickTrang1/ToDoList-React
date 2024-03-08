import NavBar from "./NavBar";
function Heading() {
    return (
        <div className="heading">
            <div className="headingtitle">
                <div className="headingsidebar"></div>
                    <h1 id="title"><u>To Do List</u></h1>
                <div className="headingsidebar"></div>
            </div>
            <div className="navigationbar">
                <NavBar/>
            </div>            
        </div>

    );
}
export default Heading