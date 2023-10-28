import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'
import logo from '../../img/logo_completo.png'

function NavBar() {
    return (
        <nav class={styles.navbar}>
            <Link to="/"><img src={logo} alt="vagas" /></Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                     <Link to="/vagas">Ver vagas</Link>
                </li>
            </ul>
      </nav>
    )
}

export default NavBar