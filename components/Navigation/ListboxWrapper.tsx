import React from "react";

type ListboxWrapperProps = {
  children: React.ReactNode;
};

export const ListboxWrapper = ({ children }: ListboxWrapperProps) => (
  <div className="w-[260px] border-small px-2 py-5 border-default-200 dark:border-default-100 h-screen">
    {children}
  </div>
);