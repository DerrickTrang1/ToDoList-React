function NavBarCard(props) {
    
    return (
        <div className="navBarCard">
            <button style={{backgroundColor: props.color}}>{props.type}</button>
        </div>
    );
}
export default NavBarCard