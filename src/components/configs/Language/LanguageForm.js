import styles from './LanguageForm.module.css'
import LanguageItem from './LanguageItem'

import translationEnglish from '../../../jsons/translation.en.json'

function LanguageForm() {
  return (
    <div className={styles.LanguageForm}>
      <div>
        <h1 className={styles.Title}>Select your Language</h1>
      </div>
      
      <div className={styles.languages}>
        <LanguageItem language={translationEnglish} languageName="English" />
      </div>
    </div>
  )
}

export default LanguageForm;
