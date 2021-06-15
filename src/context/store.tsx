import { stat } from "fs";
import React from "react";
import { IAction, IState } from "../interfaces";

const initialState: IState = {
  cities: [],
  cityDetail: [],
};

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_CITIES":
      return { ...state, cities: action.payload };
    case "GET_CITY_DETAIL":
      return { ...state, cityDetail: action.payload };
    default:
      return state;
  }
}

export function StoreProvider({ children }: JSX.ElementChildrenAttribute) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
