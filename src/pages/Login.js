import { Link } from "react-router-dom";
import styles from './css/Login.module.css'

function Login() {
    return (
        <div className={styles.Login}>
            <main>
                <div className={styles.loginContainer}>
                    <h1 className={styles.LoginTitle}>Login</h1>

                    <form>
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
                    </form>

                    <div className={styles.signupLink}>
                        <p>Don't have an account? <Link to="/signup" className={styles.signup}>Sign Up</Link></p>
                    </div>

                    <div className={styles.forgotPasswordLink}>
                        <p><Link to="/forgot" className={styles.forgotPassword}>Forgot Password?</Link></p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login
