'use client';

import { ReactNode, createContext, useContext, useState } from 'react';
import { SettingsContextValue, SettingsProviderProps } from 'src/@core/types/context/type';
import { Settings } from '../types/mui/type';
import themeConfig from 'src/configs/themeConfig';
import { initialSettings } from 'src/configs/initialSettings';

// ** Create Setting Context
const SettingsContext = createContext<SettingsContextValue>({ saveSettings: () => null, settings: initialSettings });

// ** Use Setting Context
const useSettingContext = () => SettingsContext;

// ** Setting Provider Context
const SettingsProvider = (props: { children: ReactNode }) => {
  // ** Props
  const { children } = props;

  // ** State
  const [settings, setSettings] = useState<Settings>({ ...initialSettings });

  const saveSettings = (updatedSettings: Settings) => {
    setSettings(updatedSettings);
  };

  return <SettingsContext.Provider value={{ settings, saveSettings }}>{children}</SettingsContext.Provider>;
};

const SettingsConsumer = SettingsContext.Consumer;
export const useSettings = (): SettingsContextValue => useContext(SettingsContext);

export { SettingsContext, useSettingContext, SettingsProvider, SettingsConsumer };
