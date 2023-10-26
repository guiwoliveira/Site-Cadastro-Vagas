import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/logo_completo.png'

function NavBar() {
    return (
        <nav class={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="vagas" /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/vagas">Ver vagas</Link>
                    </li>
                </ul>
            </Container>
      </nav>
    )
}

export default NavBar