import React, { createContext, useReducer, useContext, useEffect } from "react";
import { useRouter } from "next/router";

export const TOGGLE = "TOGGLE";
export const CLEAR = "REMOVE";

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        selectedTags: state.selectedTags.includes(action.payload)
          ? state.selectedTags.filter((i) => i !== action.payload)
          : [...state.selectedTags, action.payload],
      };
    case CLEAR:
      return {
        ...state,
        selectedTags: [],
      };
    default:
      return state;
  }
};

const initialState = {
  selectedTags: [],
};

export const Context = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { locale } = useRouter();

  useEffect(() => {
    dispatch({ type: CLEAR });
  }, [locale]);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default StoreProvider;

export const useStore = () => useContext(Context);
