"use client";

import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    const { theme, setTheme } = useTheme();

  return (
    <footer className="footer sm:footer-horizontal p-10 px-5 lg:px-8 xl:px-[8%] py-20">
  <aside>
    {theme === "dark" ? (
                <Image
                  src={"/twt_logo_light.png"}
                  alt="Logo"
                  className="w-28"
                  width={60}
                  height={60}
                />
              ) : (
                <Image
                  src={"/twt_logo1.png"}
                  alt="Logo"
                  className="w-28"
                  width={60}
                  height={60}
                />
              )}
    <p>
      Threads With Tami
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className={theme === "dark" ? "grid grid-flow-col gap-4 text-4xl" : "grid grid-flow-col gap-4 text-4xl "}>
      <Link href={'#'}>
          <BiLogoInstagramAlt />
      </Link>

      <Link href={'#'}>
          <IoLogoWhatsapp />
      </Link>

      <Link href={'#'}>
          <MdEmail />
      </Link>
    </div>
  </nav>
</footer>
  )
}

export default Footer
