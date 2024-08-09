import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [safeTime, setSafeTime] = useState({
    st1: "1",
    st2: "2",
    st3: "3",
    st4: "4",
    st5: "5",
    st6: "6",
  });
  const [range, setRange] = useState("Low");

  return (
    <AppContext.Provider value={{ safeTime, setSafeTime, range, setRange }}>
      {children}
    </AppContext.Provider>
  );
};
