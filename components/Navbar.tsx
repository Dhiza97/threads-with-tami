"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="flex justify-between items-center w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 main-nav z-50">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/" className="font-light">Home</a>
              </li>

              <li>
                <a href="/posts" className="font-light">Blog</a>
              </li>

              <li>
                <a href="/about" className="font-light">About</a>
              </li>
            </ul>
          </div>

          {theme === "dark" ? (
            <Image
              src={"/twt_logo_light.png"}
              alt="Logo"
              className="w-12"
              width={60}
              height={60}
            />
          ) : (
            <Image
              src={"/twt_logo1.png"}
              alt="Logo"
              className="w-12"
              width={60}
              height={60}
            />
          )}
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/" className="font-light">Home</a>
            </li>

            <li>
              <a href="/posts" className="font-light">Blog</a>
            </li>

            <li>
              <a href="/about" className="font-light">About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-6">
          <ThemeToggle />

          <button
            className={
              theme === "dark"
                ? "px-4 py-2 rounded-full btn liquid font-light text-lightGreen border-lightGreen"
                : "px-4 py-2 rounded-full btn liquid font-light"
            }
            onClick={() => {
              const dialog = document.getElementById(
                "my_modal_3"
              ) as HTMLDialogElement | null;
              if (dialog) dialog.showModal();
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
