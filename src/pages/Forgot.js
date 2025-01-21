import { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import styles from './css/Forgot.module.css';

function Reset() {
    const [error, setError] = useState('');
    const emailRef = useRef();

    function CleanInputs() {
        emailRef.current.value = '';
    }

    function handleResetPassword(e) {
        e.preventDefault();

        const email = emailRef.current.value.trim();

        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setError('Please enter a valid email address!');
            } else {
                console.log(`Password reset email sent to: ${email}`);
                setError('');
                CleanInputs();
            }
        } else {
            setError('You must enter an email!');
        }
    }

    return (
        <div className={styles.Reset}>
            <main>
                <div className={styles.ResetContainer}>
                    <h1 className={styles.ResetTitle}>Forgot Password</h1>

                    <form onSubmit={handleResetPassword}>
                        <div className={styles.fields}>
                            <label htmlFor='email'>Email</label>
                            <input type='text' id='email' name='email' placeholder='email@example.com' ref={emailRef} />
                        </div>

                        <span className={styles.warning}>
                            {error}
                        </span>

                        <div className={styles.submitField}>
                            <input type='submit' value='Reset Password' className={styles.submit} />
                        </div>
                    </form>

                    <div className={styles.resetPasswordLink}>
                        <p>If you remember your password, <Link to="/login" className={styles.resetPassword}>Login</Link></p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Reset;
