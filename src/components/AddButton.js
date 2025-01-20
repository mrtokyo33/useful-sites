import styles from './css/AddButton.module.css'

function AddButton(){
    return (
        <span className={styles.AddButtonContainer}>
            <button type="button">+</button>
        </span>
    )
}

export default AddButton