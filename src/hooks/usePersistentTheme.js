import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = 'app_theme_v1';

export default function usePersistentTheme(initial = 'dark') {
  const [theme, setTheme] = useState(initial);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(THEME_KEY);
        if (stored) setTheme(stored);
      } catch (e) {
        // ignore
      }
    })();
  }, []);

  const setAndPersist = async t => {
    try {
      await AsyncStorage.setItem(THEME_KEY, t);
    } catch (e) {
      // ignore
    }
    setTheme(t);
  };

  const toggle = () => setAndPersist(theme === 'dark' ? 'light' : 'dark');

  return { theme, setTheme: setAndPersist, toggle };
}
