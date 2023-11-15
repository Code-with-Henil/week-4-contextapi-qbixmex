import React, { Dispatch, FC, ReactNode } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<string>;
};

const ThemeProvider = React.createContext<ThemeContextType>({} as ThemeContextType);

const CustomThemeContext: FC<{ children: ReactNode }> = ({ children }) => {

  const [ theme, setTheme ] = React.useState('dark');

  return (
    <ThemeProvider.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProvider.Provider>
  )

};

export {
  ThemeProvider as ThemeContext,
  CustomThemeContext,
};
