import styles from './css/NavBar.module.css'
import TextLink from '../linkComponents/TextLink'
import IconLink from '../linkComponents/IconLink'

//<div className={styles.searchContainer}>
//    <i className="fa fa-search"></i>
//    <input type="text" name="search" placeholder="Search..." />
//</div>

function NavBar() {
    return (
        <header>
            <div className={styles.logo}>
                <h1>Some Useful Links!</h1>
            </div>
              
            <nav>
                <ul className={styles.navUl}>
                    <li className={styles.navItem}><TextLink target='/' linkClass={styles.navItemLink} text='Home' /></li>
                    <li className={styles.navItem}>
                        <a href="https://github.com/mrtokyo33/useful-sites" target="_blank" rel="noopener noreferrer">
                            Repository
                        </a>
                    </li>
                </ul>
            </nav>

            <div className={styles.rigthHeader}>
                

                <div className={styles.barsIconContainer}>
                    <IconLink target='https://www.patreon.com/usefulsites' icon='fa-brands fa-patreon'/>
                </div>

                <div className={styles.barsIconContainer}>
                    <IconLink target='/configs' icon='fas fa-bars'/>
                </div>
            </div>
        </header>
    )
}

export default NavBar
