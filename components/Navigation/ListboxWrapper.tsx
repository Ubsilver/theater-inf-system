import React from "react";
import "./Navigation.css";

type ListboxWrapperProps = {
  children: React.ReactNode;
};

export const ListboxWrapper = ({ children }: ListboxWrapperProps) => (
  <div className="fhj w-[260px] min-width-200px border-small px-2 py-5 border-default-200 dark:border-default-100 h-screen">
    {children}
  </div>
);