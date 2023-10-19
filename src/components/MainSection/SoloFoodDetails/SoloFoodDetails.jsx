import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsStarHalf, BsFillCartCheckFill } from 'react-icons/bs';
import { BiSolidPurchaseTag } from 'react-icons/bi';

const SoloFoodDetails = () => {
  const singleProduct = useLoaderData();
  const { ProductName, productCompany, ProductType, price, description, rating, photo } = singleProduct;

  return (
    <div className="max-w-7xl mt-5 mx-auto p-5">
      <h2 className="text-3xl md:text-5xl text-center mb-5 font-bold">Details of {ProductName}</h2>

      <div className="flex flex-col md:flex-row gap-5 justify-center">
        <div className="w-full md:w-1/2">
          <img className="w-full md:max-w-2xl h-auto mx-auto" src={photo} alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold font-mono">Product Name: {ProductName}</h2>
          <h2 className="text-2xl md:text-3xl font-bold font-mono">Brand Name: {productCompany}</h2>
          <h2 className="text-2xl md:text-3xl font-bold font-mono">Product Type: {ProductType}</h2>
          <p className="text-xl md:text-2xl font-semibold font-serif">Product Details:</p>
          <p className="text-lg md:text-xl font-light font-serif">{description}</p>

          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold font-mono">Rating: {rating}</span>
            <BsStarHalf className="text-2xl md:text-3xl ml-1" />
          </div>

          <p className="text-2xl md:text-3xl font-bold font-mono">Price: {price}$</p>

          <div className="flex mt-5 gap-5">
            <Link to="/addproduct">
              <button className="btn btn-warning hover:rounded-full hover:btn-success">
                Add To Cart <BsFillCartCheckFill className="text-xl" />
              </button>
            </Link>
            <button className="btn btn-warning hover:rounded-full hover:btn-success">
              Purchase <BiSolidPurchaseTag className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoloFoodDetails;
