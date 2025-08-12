import React, { useContext, useEffect, useState } from "react";
import { MyCartContext } from "../context/CartProvider";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Products() {
  let [products, setProdcuts] = useState([]);
  const { cart, dispatch } = useContext(MyCartContext);

  useEffect(() => {
    async function productsFetching() {
      try {
        let response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          `throw new error ${response.status}`;
        }

        let data = await response.json();
        setProdcuts(data);
      } catch (error) {
        console.log("fetching error", error);
      }
    }
    productsFetching();
  }, []);

  function handleAddTOCart(product) {
    const alreadyExist = cart.find((item) => item.id === product.id);

    if (alreadyExist) {
      toast.success("Product is already in Cart");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
      toast.success(`${product.title} is added in cart successfully`);
    }
  }
  motion;
  return (
    <>
      <div className="my-15">
        <h1 className="text-center font-extrabold font-serif text-3xl space-y-3  text-blue-950 ">
          <span>From Streetwear to Classics – We Have It All</span>
        </h1>
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-4 my-10 p-7 space-x-5 space-y-10">
          {products.map((product) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              key={product.id}
              className="p-7 flex items-center space-x-3 sm:space-x-0   sm:justify-between sm:flex-col sm:text-center font-serif  text-amber-950 rounded-3xl space-y-2  "
              style={{ backgroundColor: "lavender" }}
            >
              <img
                className="rounded-3xl h-24 w-24 sm:h-64  sm:w-full hover:scale-105 transition-transform duration-300"
                src={product.image}
                alt="Casual Shirt for Men"
              />
              <div className="flex text-center flex-col items-center w-full gap-1 ">
                <p className=" font-extrabold">{product.title}</p>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <Link
                  to={`/individualProduct/${product.id}`}
                  className=" bg-green-700 my-1 p-2 w-full rounded text-white  hover:bg-cyan-600"
                >
                  View Product
                </Link>
                <button
                  className=" bg-cyan-500 p-2 w-full rounded text-white  hover:bg-cyan-600"
                  onClick={() => {
                    handleAddTOCart(product);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
