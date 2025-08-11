import BgImg from "../assets/Images/pexels-shattha-pilabut-38930-135620.jpg";
import { Link } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import { motion } from "framer-motion";

function Home() {
  motion;
  return (
    <>
      <div
        className=" h-screen flex space-y-5 font-serif justify-center flex-col items-center bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)),url(${BgImg})`,
        }}
      >
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-6xl font-extrabold  text-white"
        >
          Discover What's in Store
        </motion.h1>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link
            to={"/products"}
            className="opacity-90 bg-cyan-500 p-3 rounded-2xl text-white font-bold hover:scale-105 duration-300 text-xl"
          >
            Pick Your Favourites
          </Link>
        </motion.div>
      </div>
      {/* End Of Landing Page */}

      <ProductsCard></ProductsCard>
    </>
  );
}

export default Home;
