import { Link } from "react-router-dom";

const BrandFood = ({ product }) => {
  const { name, productBrand, _id, ProductType, price, description, rating, photo } =
    product;
  return (
    <div className="max-w-7xl  mx-auto">
      <div>
      <div>
      <div className="card my-10  card-compact w-[500px]  shadow-xl">
  <figure><img className="w-96 h-80" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h2 className="card-title">Brand: {productBrand}</h2>
    <p>{description}</p>
    <p className="text-2xl font-semibold">{price}$</p>
    <div className="card-actions justify-end">
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
