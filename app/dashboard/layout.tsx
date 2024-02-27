"use client";
import { Navbar } from "@/components/dashboard/sidebar";
import { cn } from "@/lib/utils";
import { useState } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [small, setSmall] = useState(false);
  const changeSize = () => {
    setSmall(!small);
  };
  return (
    <div>
      <Navbar click={changeSize} small={small} />
      <div className={cn("p-4 md:ml-64", small && "md:ml-20")}>
        {/* <Breadcrumbs /> */}
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
