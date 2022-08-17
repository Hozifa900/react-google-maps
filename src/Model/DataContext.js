import React from "react";
import { createContext, useState } from "react";
import App from "../App";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const location = {
    lat: "25.2048",
    lng: "55.2708",
    loc: "55.2708",
  };
  return (
    <DataContext.Provider value={[location]}>
      <App />
    </DataContext.Provider>
  );
};
