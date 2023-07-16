'use client'
import { AppContext } from "@/app/contexts/app.context";
import { IAppContext } from "@/app/interfaces/IAppContext";
import { ReactNode } from "react";

interface ContextClientWrapperProps {
  children?: ReactNode;
  context: IAppContext;
}

export default function ContextClientWrapper({children, context}: ContextClientWrapperProps){
  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )

}