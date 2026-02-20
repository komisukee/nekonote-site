"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MobileMenu: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col items-center justify-center w-8 h-8 gap-1 focus:outline-none"
    >
      <span
        className={`block w-full h-0.5 bg-primary-dark transition-transform ${
          isOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      />
      <span
        className={`block w-full h-0.5 bg-primary-dark transition-opacity ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block w-full h-0.5 bg-primary-dark transition-transform ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      />
    </button>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 外側クリックでモバイルメニューを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("nav") && !target.closest("button")) {
        setIsOpenMobileMenu(false);
      }
    };
    if (isOpenMobileMenu) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpenMobileMenu]);

  return (
    <header className={`fixed w-full bg-[#fff] z-50 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container">
        <div className="flex items-center py-3 gap-12">
          <h1>
            <Link href="/" className="w-[200px] h-[50px] relative block">
              <Image
                src="/nekonote_logo_1.png"
                alt="ネコノテ合同会社"
                layout="fill"
                objectFit="contain"
              />
            </Link>
          </h1>

          <div className="ml-auto">
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8 text-md font-medium">
                <li>
                  <Link
                    href="/#businessInfo"
                    className="hover:text-primary-dark transition font-bold"
                  >
                    事業内容
                  </Link>
                </li>
                <li>
                  <Link href="/works" className="hover:text-primary-dark transition font-bold">
                    実績
                  </Link>
                </li>
                <li>
                  <Link href="/company" className="hover:text-primary-dark transition font-bold">
                    会社概要
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="md:hidden">
              {/* Mobile Hamburger */}
              <MobileMenu isOpen={isOpenMobileMenu} setIsOpen={setIsOpenMobileMenu} />

              {/* Mobile Navigation */}
              {isOpenMobileMenu && (
                <nav className="absolute top-full left-0 w-full bg-[#fff] shadow-lg py-2">
                  <ul className="flex flex-col">
                    <li>
                      <Link
                        href="/#businessInfo"
                        className="block px-4 py-2 hover:bg-gray-100 font-bold"
                        onClick={() => setIsOpenMobileMenu(false)}
                      >
                        事業内容
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/works"
                        className="block px-4 py-2 hover:bg-gray-100 font-bold"
                        onClick={() => setIsOpenMobileMenu(false)}
                      >
                        実績
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/company"
                        className="block px-4 py-2 hover:bg-gray-100 font-bold"
                        onClick={() => setIsOpenMobileMenu(false)}
                      >
                        会社概要
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#contact"
                        className="block px-4 py-2 hover:bg-gray-100 font-bold"
                        onClick={() => setIsOpenMobileMenu(false)}
                      >
                        お問い合わせ
                      </Link>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>

          <Link
            href="/#contact"
            className="md:block hidden ml-4 bg-secondary text-primary-dark font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
