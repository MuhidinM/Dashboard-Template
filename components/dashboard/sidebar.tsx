"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import {
  AlignJustify,
  ChevronsLeft,
  ChevronsRight,
  LogOut,
  Settings,
} from "lucide-react";
import { ModeToggle } from "../theme-toggle";
import Logo from "../logo";
import { User } from "../user";
import { sideBar } from "@/constants";

export const Navbar = ({
  click,
  menu,
  small,
}: {
  click: any;
  menu: any;
  small: any;
}) => {
  const path = usePathname();
  return (
    <div>
      <div className="md:hidden flex items-center justify-between my-2 mx-4">
        <Button variant={"outline"} onClick={menu}>
          <span className="sr-only">Open sidebar</span>
          <AlignJustify />
        </Button>
        <div className="md:hidden">
          <Logo href="/" />
        </div>
        <div className="md:hidden">
          <ModeToggle />
        </div>
      </div>

      <aside
        className={cn(
          "fixed top-0 left-0 h-screen w-64 flex transition-transform -translate-x-full sm:translate-x-0 shadow-sm",
          small && "w-20"
        )}
      >
        <div className="h-full w-full flex flex-col justify-between px-3 py-4 bg-secondary dark:bg-gray-800 overflow-hidden">
          <div className="flex flex-col overflow-y-auto">
            <div
              className={cn(
                "flex items-center justify-between pb-2 mb-2",
                small && "flex-col space-y-2"
              )}
            >
              <Logo href="/" small={small ? true : false} />
              <div
                className={cn(
                  "flex items-center",
                  small ? "flex-col justify-center space-y-2" : "space-x-2"
                )}
              >
                <ModeToggle />
                <Button size={"icon"} variant="outline" onClick={click}>
                  {small ? <ChevronsRight /> : <ChevronsLeft />}
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <ul className="space-y-2 font-medium w-full">
                {sideBar.map(
                  (item) =>
                    !item.hide && ( // Render the list item only if item.hidden is false
                      <li
                        key={item.name}
                        className="rounded-md border border-gray-500"
                      >
                        <Link
                          href={item.path}
                          className={cn(
                            "flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 group",
                            small && "justify-center ",
                            item.path === path && "text-cyan-600",
                            item.path !== path &&
                              "text-gray-500 rounded-lg dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500"
                          )}
                        >
                          {item.icon}
                          <span className={cn("ms-3", small && "hidden")}>
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
          <div className="items-center justify-between">
            <div className="flex flex-col">
              <div className="mb-2">
                <ul className="space-y-2 font-medium w-full ">
                  <li>
                    <Link
                      href="/setting"
                      className="flex border border-gray-500 justify-center items-center p-2 text-gray-500 rounded-lg dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <Settings />
                      <span className={cn("ms-3", small && "hidden")}>
                        Setting
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Button className="text-white bg-red-500 hover:bg-red-600 w-full">
                      <LogOut />
                      <span className={cn("ms-3", small && "hidden")}>
                        Log out
                      </span>
                    </Button>
                  </li>
                </ul>
              </div>
              <div
                className={cn(
                  small
                    ? "flex justify-center"
                    : "flex justify-between border border-gray-500 p-2 rounded-lg items-center"
                )}
              >
                <div className="flex">
                  <User />
                </div>
                <div className={cn("flex flex-col", small && "hidden")}>
                  <p>Name Name</p>
                  <span className="text-xs text-gray-400">mail@email.com</span>
                </div>
                <div className={cn("flex flex-col", small && "hidden")}></div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
