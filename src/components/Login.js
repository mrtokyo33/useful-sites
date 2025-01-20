import styles from './css/Login.module.css'

function Login() {
    return (
        <div className={styles.Login}>
            <div className={styles.loginContainer}>
                <h1 className={styles.LoginTitle}>Login</h1>

                <div className={styles.fields}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' name='username' placeholder='Username' />
                </div>

                <div className={styles.fields}>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' placeholder='Password' />
                </div>

                <span className={styles.submitField}>
                    <input type='submit' value="Login" className={styles.submit} />
                </span>
            </div>
        </div>
    )
}

export default Login