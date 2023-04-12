// BookContext.tsx
import React, { createContext, useState } from "react";

export const BookContext = createContext([]);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { id: 1, name: "tales by mama" },
    { id: 2, name: " byanca mama" },
    { id: 3, name: "mama alana" }
  ]);

  return ( 
    <BookContext.Provider value={{books, setBooks}}>
      {children}
    </BookContext.Provider>
  );
};
