"use client";

import styles from "../home/style/navbar.module.css";
import { useNavbar } from "@/hooks/useNavbar";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import LogoImage from "@/assets/svg/logo/logo.svg";
import LogoTitle from "@/assets/svg/logo/braciate-title.svg";
import hamburger from "@/assets/svg/fragments/hamburger.svg";
import goldTexture from "@/assets/svg/fragments/gold-texture.svg";
import close from "@/assets/svg/fragments/close-slide.svg";
import React from "react";
import { useSession } from "next-auth/react";

const Navbar: FC = () => {
  const { isOpen, toggleSlide, handleLogout, timeLeft } = useNavbar();
  const { data: session, status } = useSession();
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  return (
    <main className="sticky top-0 z-20 w-full">
      <nav className={`${styles.navbar}`}>
        <div className={styles.navbarLogo}>
          <Link href="/" className="flex">
            <Image src={LogoImage} alt="Logo" className="w-max" />
            <Image src={LogoTitle} alt="Title" className="w-max" />
          </Link>
        </div>
        <span
          className="flex justify-center h-8 p-1 cursor-pointer w-9 hamburger md:hidden"
          onClick={toggleSlide}
        >
          <div className="relative w-14 p-4 rounded-md overflow-hidden">
            <Image
              src={goldTexture}
              alt="Gold texture"
              fill={true}
              className="object-cover scale-150"
            />
            <Image src={hamburger} alt="hamburger" fill={true} />
          </div>
        </span>
        {/* nav mobile */}
        <div
          className={`md:hidden font-jaoren fixed inset-0 right-0 flex justify-end w-full h-full transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={toggleSlide}
        >
          <div
            className={`z-50 flex flex-col w-3/4 h-full p-8 text-2xl md:text-3xl tracking-wider text-end ${styles.slideNav}`}
          >
            <div className="flex justify-start">
              <span className="cursor-pointer w-max" onClick={toggleSlide}>
                <Image src={close} alt="X" className="h-4 self-start" />
              </span>
            </div>
            <ul className="flex flex-col space-y-4 sm:space-y-8 mb-auto mt-8">
              <li className="py-2 border-b-2 border-white border-opacity-40 font-jaoren">
                <Link className="cursor-pointer" href="/" onClick={toggleSlide}>
                  HOME
                </Link>
              </li>
              <li className="py-2 border-b-2 border-white border-opacity-40">
                <Link
                  className="cursor-pointer"
                  href="/#panduan"
                  onClick={toggleSlide}
                >
                  Panduan
                </Link>
              </li>
              <li className="py-2 border-b-2 border-white border-opacity-40">
                <Link
                  className="cursor-pointer"
                  href="/faq"
                  onClick={toggleSlide}
                >
                  FAQ
                </Link>
              </li>
              <li
                className={`self-center px-8 py-1 mt-4 ${styles.vote_slide} w-max`}
              >
                {status === "authenticated" ? (
                  <Link
                    className="cursor-pointer"
                    href="/"
                    onClick={handleLogout}
                  >
                    LOGOUT
                  </Link>
                ) : (
                  <Link
                    className="cursor-pointer"
                    href="/login"
                    onClick={toggleSlide}
                  >
                    LOGIN
                  </Link>
                )}
              </li>
            </ul>
            <div
              className={`self-center justify-center mt-4 ${styles.navbarLogo}`}
            >
              <Image src={LogoImage} alt="Logo" />
              <Image src={LogoTitle} alt="Title" />
            </div>
          </div>
        </div>
        {/* nav desktop */}
        <ul
          className={`hidden ${styles.navbarLinks} md:flex items-center font-jaoren text-2xl`}
        >
          <li>
            <Link className={styles.links} href="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className={styles.links} href="/#panduan">
              Panduan
            </Link>
          </li>
          <li>
            <Link className={styles.links} href="/faq">
              FAQ
            </Link>
          </li>
          <li id={styles.votenow}>
            {status === "authenticated" ? (
              <Link className={styles.links} href="/" onClick={handleLogout}>
                LOGOUT
              </Link>
            ) : (
              <Link className={styles.links} href="/login">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <div className="text-xl font-medium gap-2 flex w-max bg-white rounded-br-xl text-black absolute">
        <span
          className={`p-1 rounded-br-3xl pr-4 text-white ${styles.countDown}`}
        >
          <p className="font-jaoren font-white tracking-wider ">
            Real Time Countdown
          </p>
        </span>
        <p className="font-light text-lg p-1 bottom-0">
          {days}d: {hours}h: {minutes}m: {seconds}s
        </p>
      </div>
    </main>
  );
};
export default Navbar;
