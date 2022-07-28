import { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavoritesContext from '../../context/FavoritesContext'
import styles from './styles.module.css'

function Navbar() {

    const favoriteCtx = useContext(FavoritesContext);

    return (
        <nav className={styles.nav}>
            <Link to="/" className={styles.logo}>Personel App</Link>

            <ul>
                <li>
                    <Link to="/">All Persons</Link>
                </li>
                <li>
                    <Link to="/new-person">Add New Person</Link>
                </li>
                <li>
                    <Link to="/favorite-person">Favorite Persons <span className={styles.badge}>{favoriteCtx.totalFavorites}</span> </Link>
                </li>
            </ul>

        </nav>

    )
}

export default Navbar