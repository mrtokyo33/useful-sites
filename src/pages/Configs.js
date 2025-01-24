import React, { useState } from 'react';
import styles from './css/Configs.module.css';

import ConfigItem from '../components/configs/configItem';
import ColorForm from '../components/configs/color/ColorForm';
import ThemesForm from '../components/configs/themes/ThemesForm';
import FontsForm from '../components/configs/fonts/FontsForm';
import UserConfigurations from '../components/configs/userConfigurations/UserConfigurations';
import PrivacyConfigurations from '../components/configs/privacy/PrivacyConfigurations';
import LinkStyles from '../components/configs/linkStyles/LinkStyles';
import Transitions from '../components/configs/transitions/Transitions'

function Configs({ colors, onColorChange, onResetColors }) {
  const [selectedConfig, setSelectedConfig] = useState(null);

  const handleSelectConfig = (configKey) => {
    setSelectedConfig(configKey);
  };

  const configComponents = {
    color: <ColorForm colors={colors} onColorChange={onColorChange} onResetColors={onResetColors} />,
    themes: <ThemesForm />,
    fonts: <FontsForm />,
    transitions: <Transitions />,
    links: <LinkStyles />,
    user: <UserConfigurations />,
    privacy: <PrivacyConfigurations />
  };

  return (
    <div className={styles.ConfigsContainer}>
      <main>
        <div className={styles.titleContainer}>
          <h1>Settings</h1>
          <i className="fa-solid fa-gear"></i>
        </div>
        <div className={styles.Configs}>
          <span className={styles.leftConfigs}>
            <ul className={styles.configurationList}>
              <ConfigItem icon="fa fa-paint-brush" text="Color Settings" configKey="color" isSelected={selectedConfig === 'color'} onSelect={handleSelectConfig} />
              <ConfigItem icon="fa-solid fa-palette" text="Themes" configKey="themes" isSelected={selectedConfig === 'themes'} onSelect={handleSelectConfig} />
              <ConfigItem icon="fa fa-font" text="Fonts" configKey="fonts" isSelected={selectedConfig === 'fonts'} onSelect={handleSelectConfig} />
              <ConfigItem icon="fa fa-language" text="Languages" configKey="languages" isSelected={selectedConfig === 'language'} onSelect={handleSelectConfig} />
              <ConfigItem icon="fa-solid fa-link" text="Link Styles" configKey="links" isSelected={selectedConfig === 'links'} onSelect={handleSelectConfig} />
              <ConfigItem icon="fa-solid fa-wand-magic-sparkles" text="Transitions" configKey="transitions" isSelected={selectedConfig === 'transitions'} onSelect={handleSelectConfig} />
              <ConfigItem icon="fa-solid fa-user" text="User Settings" configKey="user" isSelected={selectedConfig === 'user'} onSelect={handleSelectConfig} />
              <ConfigItem icon="fa-solid fa-eye-slash" text="Privacy" configKey="privacy" isSelected={selectedConfig === 'privacy'} onSelect={handleSelectConfig} />
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
