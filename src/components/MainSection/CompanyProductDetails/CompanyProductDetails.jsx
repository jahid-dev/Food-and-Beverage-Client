import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BrandFood from "../BrandFood/BrandFood";
import Slider from "../Slider/Slider";

const CompanyProductDetails = () => {
  const [newProducts, setNewProducts] = useState([]);
  const brand = useLoaderData();

  const { companyName } = brand;
  console.log(companyName);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.productCompany === companyName
        );
        setNewProducts(filteredProducts);
      });
  }, [companyName]);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-5xl text-center my-10 font-bold font-serif">
        Welcome to{" "}
        <span className="font-mono text-3xl md:text-6xl">{companyName}</span>{" "}
        House
      </h2>
      {newProducts.length === 0 ? (
        <div>
          <p className="text-5xl md:text-6xl font-bold mt-36 font-sans text-center">
            SORRY!!
          </p>
          <p className="text-5xl md:text-6xl font-bold font-sans text-center">
            No Product Found!!
          </p>
          <div className="flex mt-10 justify-center">
            <Link to="/addproduct">
              <button className="btn btn-warning hover:rounded-full hover:btn-success">
                Add Some Products In This Brand
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          {/* Slider component */}
          <Slider />
          <div className="grid md:gap-5 grid-cols-1 md:grid-cols-2">
            {newProducts?.map((product) => (
              <BrandFood product={product} key={product._id}></BrandFood>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyProductDetails;
