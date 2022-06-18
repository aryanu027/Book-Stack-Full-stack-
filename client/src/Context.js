import React, { useState, useContext } from "react";
const Appcontext = React.createContext();
const AppProvider = ({ children }) => {
  const [OpenModal, SetisopenModal] = useState(false);
  const OnModal = () => {
    SetisopenModal(true);
  };
  const OffModal = () => {
    SetisopenModal(false);
  };
  return (
    <Appcontext.Provider
      value={{
        OpenModal,
        OnModal,
        OffModal,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
export { AppProvider, Appcontext };
