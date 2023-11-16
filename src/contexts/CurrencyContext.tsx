import React, { Dispatch, FC, ReactNode, useReducer } from "react";
import currencyReducer, { Action, CurrencyCodes } from "./CurrencyReducer";

export type Exchange = {
  currency: CurrencyCodes;
  usd: number;
  cad: number;
  result: number;
};

type CurrencyContextType = {
  exchange: Exchange;
  dispatch: Dispatch<Action>;
};

const CurrencyContext = React.createContext<CurrencyContextType>({} as CurrencyContextType);

const CurrencyProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [ exchange, dispatch ] = useReducer(currencyReducer, {
    currency: CurrencyCodes.USD,
    usd: 17.32,
    cad: 12.66,
    result: 0,
  });

  return (
    <CurrencyContext.Provider value={{ exchange, dispatch }}>
      {children}
    </CurrencyContext.Provider>
  );

};

export {
  CurrencyProvider,
  CurrencyContext,
};
