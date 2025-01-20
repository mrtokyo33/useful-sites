import styles from './css/Header.module.css'

function Header() {
  return (
    <header>
        <div className={styles.logo}>
            <h1>Some Useful Links!</h1>
        </div>
      
        <nav>
            <ul className={styles.navUl}>
                <li className={styles.navItem}><a href="/" target="_self" rel="nofollow">Home</a></li> {/* Updated the href */}
                <li className={styles.navItem}><a href="https://github.com/mrtokyo33/useful-sites" target="_blank" rel="noopener noreferrer">Repository</a></li>
            </ul>
        </nav>

        <div className={styles.searchAndLogin}>
            <div className={styles.searchContainer}>
                <i className="fa fa-search"></i>
                <input type="text" name="search" placeholder="Search..." />
            </div>
            <div className={styles.loginIconContainer}>
                <a href="login.html">
                    <i className="fas fa-user"></i>
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header
