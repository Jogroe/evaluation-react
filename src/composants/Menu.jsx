import { Link } from "react-router-dom"

export const Menu = () => {
    return <nav className="navbar navbar-expand bg-dark navbar-dark px-4">
        <Link to="/" className="navbar-brand">Mini E commerce</Link>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">Catalogue</Link>
            </li>
            <li className="nav-item float-end">
                <Link to="/panier" className="nav-link">Panier</Link>
            </li>
        </ul>
    </nav>
}