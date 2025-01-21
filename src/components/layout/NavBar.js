import styles from './css/NavBar.module.css'
import TextLink from '../linkComponents/TextLink'
import IconLink from '../linkComponents/IconLink'

function NavBar() {
    return (
        <header>
            <div className={styles.logo}>
                <h1>Some Useful Links!</h1>
            </div>
              
            <nav>
                <ul className={styles.navUl}>
                    <li className={styles.navItem}><TextLink target='/' linkClass={styles.navItemLink} text='Home' /></li>
                    <li className={styles.navItem}><a href="https://github.com/mrtokyo33/useful-sites" target="_blank" rel="noopener noreferrer">Repository</a></li>
                </ul>
            </nav>

            <div className={styles.rigthHeader}>
                <div className={styles.searchContainer}>
                    <i className="fa fa-search"></i>
                    <input type="text" name="search" placeholder="Search..." />
                </div>

                <div className={styles.loginIconContainer}>
                    <IconLink target='/login' icon='fas fa-user'/>
                </div>

                <div className={styles.barsIconContainer}>
                    <IconLink target='/configs' icon='fas fa-bars'/>
                </div>
            </div>
        </header>
    )
}

export default NavBar