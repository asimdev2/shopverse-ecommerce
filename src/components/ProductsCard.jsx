import React from "react";
import Shirt1 from "../assets/Images/shirts1.jpg";
import Shirt2 from "../assets/Images/shirts2.jpg";
import Shirt3 from "../assets/Images/shirts3.jpg";
import { Link } from "react-router-dom";

function ProductsCard() {
  return (
    <>
      <div className="my-15">
        <h1 className="text-center text-2xl font-serif font-extrabold tracking-wider  ">
          Top Selling Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 ">
          <div className="p-6 flex flex-col text-center font-serif space-y-2 hover:scale-105 transition-transform duration-300">
            <img
              className="rounded-3xl w-full h-64 object-cover "
              src={Shirt1}
              alt="Casual Shirt for Men"
            />
            <p className="text-2xl font-extrabold">Casual Shirt For Men</p>
            <p className="">Comfort And Style</p>
            <p>2000 Sold</p>
          </div>
          <div className="p-6 flex flex-col text-center font-serif space-y-2 hover:scale-105 transition-transform duration-300">
            <img
              className="rounded-3xl w-full h-64 object-cover "
              src={Shirt2}
              alt="Casual Shirt for Men"
            />
            <p className="text-2xl font-extrabold">Casual Shirt For Men</p>
            <p className="">Comfort And Style</p>
            <p>1000 Sold</p>
          </div>
          <div className="p-6 flex flex-col text-center font-serif space-y-2 hover:scale-105 transition-transform duration-300">
            <img
              className="rounded-3xl w-full h-64 object-cover "
              src={Shirt3}
              alt="Casual Shirt for Men"
            />
            <p className="text-2xl font-extrabold">Casual Shirt For Men</p>
            <p className="">Comfort And Style</p>
            <p>1500 Sold</p>
          </div>
        </div>
        <div className="text-center items-center">
          <Link
            className="bg-cyan-500  p-3 font-extrabold font-sans tracking-wider  text-white  rounded-2xl"
            to={"/products"}
          >
            View All Products
            <span className="text-black  ms-5  " style={{ fontSize: "19px" }}>
              ➜
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductsCard;
