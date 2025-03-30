"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CiDark, CiUser } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiHamburger } from "react-icons/pi";
import { TfiClose } from "react-icons/tfi";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const sideMenuRef = useRef<HTMLUListElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 main-nav z-50 ${
        isScroll
          ? "bg-[#E2DF4C] text-[var(--color-deepForest)] bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
          : ""
      }`}
    >
      <Link href={""}>
        <Image src={"/twt_logo1.png"} alt="Logo" className="w-16" width={70} height={70} />
      </Link>

      {/* Desktop Menu */}
      <ul
        className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
          isScroll
            ? ""
            : "bg-[#E2DF4C] text-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
        }`}
      >
        {[
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
          { name: "About", path: "/about" },
          { name: "Contact Us", path: "/contact" },
        ].map((item) => (
          <li
            key={item.path}
            className={`relative hover:text-primaryColor ${
              pathname === item.path ? "text-primaryColor after:w-full" : ""
            }`}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-between gap-5 items-center">
        <div>
        <CiDark className="text-4xl" />
        </div>
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center hover:cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <CiUser className="text-3xl text-primaryColor hover:cursor-pointer" />
              <MdKeyboardArrowDown className="text-primaryColor" />
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg dark:bg-darkTheme">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      href="/orders"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wishlist"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <button
                      className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        : (
          <Link href={"/login"}>
            <button className="px-4 py-2 rounded-full btn liquid font-light">
              Sign In
            </button>
          </Link>
        )

        <button onClick={openMenu} className="block md:hidden ml-3">
          <PiHamburger className="text-3xl text-primaryColor" />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
      >
        <div onClick={closeMenu} className="absolute right-6 top-6">
          <TfiClose />
        </div>

        {[
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
          { name: "About", path: "/about" },
          { name: "Contact Us", path: "/contact" },
        ].map((item) => (
          <li
            key={item.path}
            className={pathname === item.path ? "text-primaryColor" : ""}
          >
            <Link href={item.path} onClick={closeMenu}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
