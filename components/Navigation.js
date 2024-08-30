import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenuLine, RiMenuUnfold4Line } from "react-icons/ri";

export default function Navigation({ isOpen, setIsOpen }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("resize", handleResize);
    // Check the initial screen size
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setShowButton]);

  function handleClick(e) {
    e.stopPropagation();
    setIsOpen((open) => !open);
  }

  return (
    <>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:block z-20 md:z-10 text-xl text-accent-500 md:text-white bg-primary-800 md:bg-inherit bg-opacity-50 w-full h-full  md:w-auto md:h-auto absolute md:static p-16 py-24 sm:p-24 md:p-0 left-[50%] top-[50%] md:left-0 md:top-0 -translate-x-[50%] -translate-y-[50%] md:-translate-x-0 md:-translate-y-0`}
      >
        <ul className="flex gap-16 items-center flex-col md:flex-row bg-primary-800 md:bg-inherit py-16 md:py-0 rounded-md md:rounded-none">
          <li>
            <Link
              href="/cabins"
              className="hover:text-accent-400 transition-colors"
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accent-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-accent-400 transition-colors"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </nav>

      {showButton && (
        <button onClick={handleClick} className="text-3xl z-50">
          {isOpen ? <RiMenuUnfold4Line /> : <RiMenuLine />}
        </button>
      )}
    </>
  );
}
