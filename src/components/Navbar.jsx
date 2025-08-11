import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex  top-0  justify-between  shadow-md  h-13 items-center bg-sky-900  text-white font-extrabold text-[20px] font-serif">
        <strong className="ms-10 sm:ms-25 hover:scale-120 transform ease-in-out duration-300">
          Shopverse
        </strong>
        <div className="hidden md:flex me-15 space-x-7 h-[100%] items-center">
          <Link
            to={"/"}
            className="hover:text-black rounded  hover:bg-white h-[100%] py-3 px-3"
          >
            Home
          </Link>
          <Link
            to={"/products"}
            className="hover:text-black rounded  hover:bg-white h-[100%]  py-3 px-3"
          >
            Products
          </Link>
          <Link
            to={"/viewCart"}
            className="hover:text-black rounded  hover:bg-white h-[100%]  py-3 px-3"
          >
            View Cart
          </Link>
        </div>

        <button
          className="md:hidden text-3xl me-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* For Mobile */}
      {isOpen && (
        <div
          className={`flex flex-col   bg-sky-900  text-white font-extrabold text-[20px] font-serif  justify-center  md:hidden duration-300 ease-in-out ${
            isOpen ? "max-h-60 py-6" : "max-h-0 overflow-hidden"
          } `}
        >
          <div className="flex flex-col space-y-8 ms-10  text-2xl text-white me-5  font-serif font-extrabold">
            <Link
              to={"/"}
              className="focus:text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to={"/products"}
              className="focus:text-white"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to={"/viewCart"}
              className="focus:text-white"
              onClick={() => setIsOpen(false)}
            >
              View Cart
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
