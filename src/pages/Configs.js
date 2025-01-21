import styles from './css/Configs.module.css'
import { useState } from 'react'
import ColorForm from '../components/configs/color/ColorForm'

function Configs({ colors, onColorChange, onResetColors }) {
  const [configSelect, setConfigSelect] = useState(null)

  const handleSelectConfig = (config) => {
    setConfigSelect(config)
  }

  return (
    <div className={styles.ConfigsContainer}>
      <main>
        <div className={styles.titleContainer}>
          <h1>Configs</h1>
          <i className="fa-solid fa-gear"></i>
        </div>
        <div className={styles.Configs}>
          <span className={styles.leftConfigs}>
            <ul className={styles.configurationList}>
              <li 
                onClick={() => handleSelectConfig('color')} 
                className={configSelect === 'color' ? styles.selected : ''} 
              >
                Color
              </li>
            </ul>
          </span>
          <span className={styles.rightConfigs}>
            {configSelect === 'color' && (
              <ColorForm colors={colors} onColorChange={onColorChange} onResetColors={onResetColors} />
            )}
          </span>
        </div>
      </main>
    </div>
  )
}

export default Configs
