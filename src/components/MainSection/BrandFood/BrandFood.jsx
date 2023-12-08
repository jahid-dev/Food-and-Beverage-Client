import { Link } from "react-router-dom";
import { LuSettings2 } from 'react-icons/lu';

const BrandFood = ({ product }) => {
    const { ProductName, productCompany, _id, ProductType, price, description, rating, photo } =
        product;
    return (
        <div className="max-w-7xl mx-auto p-4">
            <div>
                <div>
                    <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl card my-10 card-compact w-full md:w-96 lg:w-2/4 xl:w-3/5 shadow-lg ">
                        <figure>
                            <img className="w-96 h-96" src={photo} alt={ProductName} />
                            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold absolute top-2 right-2 text-white bg-black px-2 rounded-lg">
                                Rating: {rating}
                            </p>
                        </figure>
                        <div className="card-body py-10 ">
                            <h2 className="card-title text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold ">
                                {ProductName}
                            </h2>
                            <h2 className="card-title text-lg md:text-xl lg:text-2xl xl:text-3xl">
                                Brand: {productCompany}
                            </h2>
                            <p className="text-sm md:text-base lg:text-lg xl:text-xl mt-4">
                                {description}
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-2">
                                {price}$
                            </p>
                            <div className="card-actions flex justify-between items-center mt-4">
                                <Link to={`/update/${_id}`}>
                                    <button className="btn btn-warning hover:btn-success text-base md:text-lg lg:text-xl xl:text-2xl">
                                        Update Product <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl"><LuSettings2 /></span>
                                    </button>
                                </Link>
                                <Link to={`/solofooddetails/${_id}`}>
                                    <button className="btn btn-warning hover:btn-success text-base md:text-lg lg:text-xl xl:text-2xl">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandFood;
