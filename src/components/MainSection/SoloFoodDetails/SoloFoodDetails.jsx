import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsStarHalf, BsFillCartCheckFill } from 'react-icons/bs';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { AuthContext } from '../../../firebase/Provider/AuthProvider';
import Swal from 'sweetalert2';

const SoloFoodDetails = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const singleProduct = useLoaderData();
  const { ProductName, productCompany, ProductType, price, description, rating, photo } = singleProduct;

  const cartProduct = {
    ProductName,
    UserEmail: userEmail,
    productCompany,
    ProductType,
    price,
    description,
    rating,
    photo,
  };

  const handleAddToCart = () => {
    fetch('http://localhost:5000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Product Added to Cart',
            text: 'The product has been added to your cart successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Failed to add the product to your cart. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      });
  };

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-3xl md:text-5xl text-center mb-5 font-bold">
        Details of {ProductName}
      </h2>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="md:w-1/2 border-r-2 border-orange-300">
          <img className="w-full md:w-96 md:h-96 mx-auto" src={photo} alt="" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold font-mono">{ProductName}</h2>
          <h2 className="text-3xl font-bold font-mono">Brand Name: {productCompany}</h2>
          <h2 className="text-3xl font-bold font-mono">Product Type: {ProductType}</h2>
          <p className="text-xl font-semibold font-serif">Product Details:</p>
          <p className="text-base font-light font-serif">{description}</p>

          <p className="flex items-center font-bold font-mono">
            <span className="text-xl mr-1">Rating: {rating}</span>
            <BsStarHalf className="text-2xl" />
          </p>

          <p className="text-2xl font-bold font-mono">Price: {price}$</p>
          <div className="flex justify-center md:justify-start mt-5 space-x-5">
            <button
              onClick={handleAddToCart}
              className="btn btn-warning hover:rounded-full hover:btn-success"
            >
              Add To Cart <BsFillCartCheckFill className="text-xl" />
            </button>
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
