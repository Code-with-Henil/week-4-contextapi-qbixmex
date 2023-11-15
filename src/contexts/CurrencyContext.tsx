import React, { Dispatch, FC, ReactNode } from "react";

export type Exchange = {
  from: number;
  to: number;
  result: number;
};

type CurrencyContextType = {
  exchange: Exchange,
  setExchange: Dispatch<Exchange>;
  convertExchange: () => void;
};

const CurrencyContext = React.createContext<CurrencyContextType>({} as CurrencyContextType);

const CurrencyProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [ exchange, setExchange ] = React.useState<Exchange>({
    from: 0,
    to: 0,
    result: 0,
  });

  const convertExchange = () => {
    setExchange((prev) => {
      return {
        ...prev,
        result: prev.from * prev.to,
      };
    });
  };

  return (
    <CurrencyContext.Provider value={{ exchange, setExchange, convertExchange }}>
      {children}
    </CurrencyContext.Provider>
  );

};

export {
  CurrencyProvider,
  CurrencyContext,
};
