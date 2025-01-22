import styles from './LanguageItem.module.css'

function LanguageItem({ languageName, language }) {
  return (
    <div className={styles.LanguageItem}>
      <h1 className={styles.Title}>{languageName}</h1>
      <button type="button" className={styles.Button}></button>
    </div>
  )
}

export default LanguageItem;
