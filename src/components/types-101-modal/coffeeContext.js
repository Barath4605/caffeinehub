import { createContext, useContext } from "react";

export const CoffeeContext = createContext(null);
export const useCoffee = () => useContext(CoffeeContext);

