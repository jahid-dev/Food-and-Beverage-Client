import { Link } from "react-router-dom";
import { LuSettings2 } from 'react-icons/lu';

const BrandFood = ({ product }) => {
    const { ProductName, productCompany, _id, ProductType, price, description, rating, photo } =
        product;
    return (
        <div className="max-w-7xl  mx-auto">
            <div>
                <div>
                    <div className="card my-10  card-compact w-[500px]  shadow-xl">
                        <figure><img className="w-96 h-80" src={photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{ProductName}</h2>
                            <h2 className="card-title">Brand: {productCompany}</h2>
                            <p>{description}</p>
                            <p className="text-2xl font-semibold">{price}$</p>
                            <div className="card-actions justify-end">
                                <Link to={`/update/${_id}`}  >
                                    <button className="btn btn-warning hover:btn-success">Update Product <span className="text-xl"><LuSettings2></LuSettings2></span> </button>
                                </Link>
                                <Link to={`/solofooddetails/${_id}`} >
                                    <button className="btn btn-warning hover:btn-success">View Product</button>
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
