import { Exchange } from "./CurrencyContext";

export enum CurrencyCodes {
  CAD = 'cad',
  USD = 'usd',
}

export interface Action {
  type: CurrencyCodes,
  payload: number,
}

const currencyReducer = (state: Exchange, action: Action) => {
  switch (action.type) {
    case 'usd':
      return {
        ...state,
        result: action.payload / state.usd,
      };

    case 'cad':
      return {
        ...state,
        result: action.payload / state.cad,
      };

    default:
      return state;
  }
};

export default currencyReducer;
