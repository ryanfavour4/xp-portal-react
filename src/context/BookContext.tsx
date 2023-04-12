// BookContext.tsx
import React, { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export const BookContext = createContext<any>([]);

export const BookProvider = ({ children }: Props) => {
  const [books, setBooks] = useState<any>([
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
