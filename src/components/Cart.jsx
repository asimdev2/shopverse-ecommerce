import React, { useContext } from "react";
import { MyCartContext } from "../context/CartProvider";
import { div, h1, p } from "framer-motion/client";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const Cart = () => {
  let { dispatch, cart } = useContext(MyCartContext);
  console.log(cart);

  function handleRemove(id) {
    console.log(id);
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    toast.success(`Item is Removed`);
  }
  return (
    <>
      <div className="my-15 mx-5 md:mx-35">
        <div className="grid  grid-cols-1">
          {cart.length === 0 ? (
            <div className="my-50 md:my-30 text-center flex flex-col justify-center items-center space-y-8">
              <p className="text-4xl font-serif font-extrabold ">
                Cart is Empty
              </p>
              <Link
                to={"/products"}
                style={{ fontSize: "" }}
                className="p-3 rounded-2xl   text-white font-serif bg-emerald-700"
              >
                Start Shopping Now
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div
                className="shadow-2xl shadow-teal-950 rounded-2xl text-black font-serif mt-10 items-center  flex p-7 space-x-3 sm:space-x-15 text-center"
                style={{ fontSize: "20px" }}
                key={item.id}
              >
                <img src={item.image} className="w-25 h-25" alt="image" />
                <div className="space-y-2 sm:space-x-10 flex sm:flex-row space flex-col items-center">
                  <p>Title : {item.title}</p>

                  <input
                    min={1}
                    max={5}
                    type="number"
                    className="border-2 border-grey text-center "
                    defaultValue={item.quantity}
                    onChange={(e) => {
                      dispatch({
                        type: "CHANGE_QUANTITY",
                        payload: { id: item.id, quantity: e.target.value },
                      });
                    }}
                  />
                  <p>Price : {item.price}</p>
                  <p>Total Price : {item.price * item.quantity}</p>
                  <button
                    className="h-10 w-[100%] md:w-[50%] bg-red-500 text-white font-serif rounded-2xl"
                    onClick={() => {
                      handleRemove(item.id);
                    }}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
