import styles from './ThemesForm.module.css'
import ThemeItem from './components/ThemeItem'

import hacker101 from './jsons/hacker101.json'
import defaultTheme from './jsons/default.json'

function ThemesForm(){
    function createTheme(e){
        e.preventDefault()
        console.log('cu')
    }

    return (
        <div className={styles.ThemesFormContainer}>
            <h1 className={styles.ThemesTitle}>Select the your Theme</h1>
            
            <div className={styles.themes}>
                <ThemeItem theme={defaultTheme}/>
                <ThemeItem theme={hacker101}/>
            </div>

            <div className={styles.Buttons}>
                <form onSubmit={createTheme}>
                    <button type='submit' className={styles.submit}>Create Theme</button>
                </form>
            </div>
        </div>
    )
}

export default ThemesForm