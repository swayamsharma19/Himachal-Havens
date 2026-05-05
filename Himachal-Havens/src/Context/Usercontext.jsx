import React, { createContext, useState } from "react";

export const dataContext = createContext();

function Usercontext({ children }) {
  const [title, setTitle] = useState("");
  const [addListing, setaddListing] = useState(false);
  const [addImage1, setaddImage1] = useState(null);
  const [addImage2, setaddImage2] = useState(null);
  const [addImage3, setaddImage3] = useState(null);
  const [price, setprice] = useState("");

  const value = {
    title,
    setTitle,
    addListing,
    setaddListing,
    addImage1,
    setaddImage1,
    addImage2,
    setaddImage2,
    addImage3,
    setaddImage3,
    price,
    setprice,
  };

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  );
}

export default Usercontext;