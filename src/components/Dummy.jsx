import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Dummy = () => {
  const { data } = useContext(DataContext);
  const { data2 } = useContext(DataContext);

  return (
    <div>
      <h1>Dummy</h1>
      <h6>{data}</h6>
      <h6>{data2}</h6>
    </div>
  );
};

export default Dummy;
