import { useToggle } from '@mantine/hooks';
import { createContext, useContext } from 'react';

interface Theme {
  colorScheme: string,
  toggleTheme: () => void,
}

const data = {
  colorScheme: 'light',
  toggleTheme: () => { }
};

const ThemeContext = createContext<Theme>(data);

export const ThemeProvider: React.FC = (props) => {
  const [value, toggleTheme] = useToggle('light', ['light', 'dark']);
  const data = {
    colorScheme: value,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={data}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const data = useContext(ThemeContext);
  return data;
};