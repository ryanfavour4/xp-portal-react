// Create the RootStore
import React from "react";
import { BookProvider } from "./BookContext";
import { FacultyProvider } from "./FacultyContext";

export const RootStore = ({ children }) => {

  return (
    <FacultyProvider>
      <BookProvider>{children}</BookProvider>
    </FacultyProvider>
  );
};
