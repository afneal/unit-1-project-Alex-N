import { Link } from 'react-router';

function NavMenu() {
    return (
        <div className='nav-menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/planner">Planner</Link></li>
            <li><Link to="/traveltips">Travel Tips</Link></li>
            <li><Link to="/resources">Resources</Link></li>
        </div>
    )
}

export default NavMenu;