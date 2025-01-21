import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './css/Signup.module.css'

function Signup() {
    const [warning, setWarning] = useState('')

    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    function CleanInputs() {
        usernameRef.current.value = ''
        emailRef.current.value = ''
        passwordRef.current.value = ''
    }

    function Register(e) {
        e.preventDefault()

        const username = usernameRef.current.value.trim()
        const email = emailRef.current.value.trim()
        const password = passwordRef.current.value

        if (username && email && password) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(email)) {
                setWarning('Please enter a valid email address!')
            } else if (password.length < 8) {
                setWarning('Your password must contain at least 8 characters!')
            } else {
                console.log(`Your username is: ${username}`)
                console.log(`Your email is: ${email}`)
                console.log(`Your password is: ${password}`)
                setWarning('') 
            }
        } else {
            setWarning('You must enter all the fields!')
        }
        CleanInputs()
    }

    return (
        <div className={styles.Signup}>
            <main>
                <div className={styles.SignupContainer}>
                    <h1 className={styles.SignupTitle}>Sign up</h1>

                    <form onSubmit={Register}>
                        <div className={styles.fields}>
                            <label htmlFor='username'>Username</label>
                            <input type='text' id='username' name='username' placeholder='Username' ref={usernameRef} />
                        </div>

                        <div className={styles.fields}>
                            <label htmlFor='email'>Email</label>
                            <input type='text' id='email' name='email' placeholder='email@example.com' ref={emailRef} />
                        </div>

                        <div className={styles.fields}>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' name='password' placeholder='Password' ref={passwordRef} />
                        </div>

                        <span className={styles.warning}>
                            {warning}
                        </span>

                        <div className={styles.submitField}>
                            <input type='submit' value='Signup' className={styles.submit} />
                        </div>
                    </form>

                    <div className={styles.loginLinkContainer}>
                        <p>Already have an account? <Link to="/login" className={styles.loginLink}>Login</Link></p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Signup
