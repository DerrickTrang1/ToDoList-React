import NavBarCard from "./NavBarCard";

function NavBar() {
    const navbaritems = [["Add", "green"],  ["Remove", "red"]];

    const navBarCardConverter = navbaritems.map(items => <NavBarCard type={items[0]} color={items[1]}/>)
    return (
        <>
                <nav className="navbar">
                    {navBarCardConverter}
                </nav>
        </> 	
    );
}
export default NavBar