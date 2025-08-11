import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyCartContext } from "../context/CartProvider";
import { toast } from "react-toastify";

function IndividualProducts() {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const { dispatch } = useContext(MyCartContext);

  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw `new error ${response.status}`;
        }
        let data = await response.json();
        setProduct([data]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="my-15 mx-5 md:mx-60">
        {product.map((item) => (
          <div
            key={item.id}
            className=" text-center  p-10  text-purple-950 shadow-2xl shadow-teal-950   w-[100%] space-y-4 font-serif rounded-3xl hover:scale-102  duration-300 items-center justify-center  flex flex-col "
          >
            <img
              src={item.image}
              className="w-50 h-50 md:w-70 md:h-70  "
              alt=""
            />
            <h2 className="text-2xl md:text-4xl  font-extrabold ">
              {item.title}
            </h2>
            <p className=" font-bold text-2xl uppercase">{item.category}</p>
            <p className=" text-black " style={{ fontSize: "15px " }}>
              {item.description}
            </p>
            <p className="text-2xl font-bold">Price : {item.price}</p>
            <button
              className="bg-cyan-500 p-2 w-full rounded text-white  hover:bg-cyan-600"
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: item });
                toast.success(
                  `${item.title} has been added to your cart successfully`
                );
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default IndividualProducts;
