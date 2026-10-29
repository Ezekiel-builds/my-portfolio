import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="nav__links">
            <Link to={(e) => e.preventDefault()}>
                Home
            </Link>

            <Link to={(e) => e.preventDefault()}>
                Projects
            </Link>

            <Link to={(e) => e.preventDefault()}>
                Experience
            </Link>

            <Link to={(e) => e.preventDefault()}>
                Achievements
            </Link>

            <Link to={(e) => e.preventDefault()}>
                Contact
            </Link>
        </nav>
    )
}