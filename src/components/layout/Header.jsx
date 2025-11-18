import NavMenu from "./NavMenu";
import NavIcon from "./NavIcon";

function Header() {
    return (
        <header>
            <div className="header">
                My Travel Planner
            </div>
            <NavMenu />
            <NavIcon />
            
        </header>
    )
}

export default Header;