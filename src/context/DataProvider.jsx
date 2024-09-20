import { createContext } from "react";

const DataContext = createContext();

const DataProvider = (props) => {
  const { children } = props;
  let data = 1;
  let data2 = 2;

  return (
    <>
      <DataContext.Provider value={{ data, data2 }}>
        {children}
      </DataContext.Provider>
    </>
  );
};
export { DataContext, DataProvider };
