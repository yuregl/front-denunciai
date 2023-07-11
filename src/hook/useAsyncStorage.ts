import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const useAsyncStorage = (key: string, initialValue = '') => {
  const [state, setState] = useState('');

  const getValueFromStorage = async () => {
    try {
      const item = await AsyncStorage.getItem(key);
      setState(item ? item : '');
    } catch (error) {
      console.warn({ error });
      setState(initialValue);
    }
  };

  useEffect(() => {
    getValueFromStorage();
  }, [key, initialValue]);

  const setValue = async (value: string) => {
    try {
      setState(value);
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.warn({ error });
    }
  };

  return [state, setValue];
};

export default useAsyncStorage;
