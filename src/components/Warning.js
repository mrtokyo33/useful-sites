import React from 'react';
import styles from './Warning.module.css';

function Warning({ Title, Text, color, onClick, onClose }) {
    return (
        <div className={styles.Overlay}>
            <div className={styles.Warning} style={{ borderColor: color }}>
                <button type="button" className={styles.Close} onClick={onClose} style={{ backgroundColor: color }}>
                    X
                </button>

                <div className={styles.WarningTitle}>
                    <h1 style={{ color: color }}>{Title}</h1>
                    <i className="fa fa-exclamation-triangle" style={{ color: color }}></i>
                </div>

                <div className={styles.WarningText}>
                    <p>{Text}</p>
                </div>

                <button className={styles.ActionButton} onClick={onClick} style={{ borderColor: color }}>
                    Confirm
                </button>
            </div>
        </div>
    );
}

export default Warning;
