
import { Link, useLoaderData } from "react-router-dom";
import { BsStarHalf, BsFillCartCheckFill } from 'react-icons/bs';
import { BiSolidPurchaseTag } from 'react-icons/bi';

const SoloFoodDetails = () => {
    const singleProduct = useLoaderData()
    const { ProductName, productCompany,  ProductType, price, description, rating, photo } = singleProduct
    console.log(singleProduct);
    
    return (
        <div className="max-w-7xl mt-5 mx-auto">
            <h2 className=" text-2xl  md:text-5xl text-center mb-10 font-bold ">Details of {ProductName}</h2>
            
        <div className="flex gap-10  justify-center flex-row">
            <div className="w-1/2 border-r-2 border-orange-300">
            <img className="w-[600px] h-[500px]" src={photo} alt="" />
            </div>
            <div>
                <h2 className="text-3xl font-bold font-mono">Product Name: {ProductName}</h2>
                <h2 className="text-3xl font-bold font-mono">Brand Name  : { productCompany}</h2>
                <h2 className="text-3xl font-bold font-mono">Product Type: {ProductType}</h2>
                <p className="text-2xl font-semibold font-serif">Product Details:</p>
                <p className="text-xl w-96 font-light font-serif">{description}</p>
                
               
               <p className=" gap-1 flex items-center font-bold font-mono"> <span className="text-2xl">Rating: {rating}</span> <span className="text-xl font-bold font-mono"> <BsStarHalf></BsStarHalf> </span></p>
               
                <p className="text-2xl font-bold font-mono">Price: {price}$</p>
                <div className="flex mt-5 gap-5">
                <Link to='/addproduct'>
          <button className="btn btn-warning hover:rounded-full hover:btn-success">Add To Cart <BsFillCartCheckFill className="text-xl"></BsFillCartCheckFill> </button>
          </Link>
          <button className="btn btn-warning hover:rounded-full hover:btn-success">Purchase <BiSolidPurchaseTag className="text-xl"></BiSolidPurchaseTag> </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SoloFoodDetails;