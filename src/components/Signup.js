import styles from './css/Signup.module.css'
import { useState } from 'react'

function Signup() {
    function Register(e) {
        e.preventDefault()
        console.log(`your username is: ${username}`)
        console.log(`your email is: ${email}`)
        console.log(`your password is: ${password}`)
    }

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <div className={styles.Signup}>
            <div className={styles.SignupContainer}>
                <h1 className={styles.SignupTitle}>Sign up</h1>

                <form onSubmit={Register}>
                    <div className={styles.fields}>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username' name='username' placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div className={styles.fields}>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' placeholder='email@example.com' onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className={styles.fields}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <span className={styles.submitField}>
                        <input type='submit' value="Signup" className={styles.submit} />
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Signup