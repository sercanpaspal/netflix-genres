import React, { createContext, useReducer, useContext } from "react";

export const TOGGLE = "TOGGLE";

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        selectedTags: state.selectedTags.includes(action.payload)
          ? state.selectedTags.filter((i) => i !== action.payload)
          : [...state.selectedTags, action.payload],
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

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default StoreProvider;

export const useStore = () => useContext(Context);
