import React, { useState } from 'react';
import styles from './css/Configs.module.css';

import ConfigItem from '../components/configs/configItem';
import ColorForm from '../components/configs/color/ColorForm';
import ThemesForm from '../components/configs/themes/ThemesForm';

function Configs({ colors, onColorChange, onResetColors }) {
  const [selectedConfig, setSelectedConfig] = useState(null);

  const handleSelectConfig = (configKey) => {
    setSelectedConfig(configKey);
  };

  const configComponents = {
    color: <ColorForm colors={colors} onColorChange={onColorChange} onResetColors={onResetColors} />,
    themes: <ThemesForm />
  };

  return (
    <div className={styles.ConfigsContainer}>
      <main>
        <div className={styles.titleContainer}>
          <h1>Configurations</h1>
          <i className="fa-solid fa-gear"></i>
        </div>
        <div className={styles.Configs}>
          <span className={styles.leftConfigs}>
            <ul className={styles.configurationList}>
              <ConfigItem icon="fa fa-paint-brush" text="Color Configuration" configKey="color" isSelected={selectedConfig === 'color'} onSelect={handleSelectConfig} />
              <ConfigItem icon="fa-solid fa-palette" text="Themes" configKey="themes" isSelected={selectedConfig === 'themes'} onSelect={handleSelectConfig} />
            </ul>
          </span>
          <span className={styles.rightConfigs}>
            {selectedConfig && configComponents[selectedConfig]}
          </span>
        </div>
      </main>
    </div>
  );
}

export default Configs;
