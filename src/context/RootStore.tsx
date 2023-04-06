// Create the RootStore
import React, { ReactNode } from "react";
import { BookProvider } from "./BookContext";
import { FacultyProvider } from "./FacultyContext";

type Props = {
  children: ReactNode;
};

export const RootStore = ({ children }: Props) => {

  return (
    <FacultyProvider>
      <BookProvider>{children}</BookProvider>
    </FacultyProvider>
  );
};
