import Swal from "sweetalert2";
import  { useState } from 'react';

const AddProduct = () => {
  const [formValues, setFormValues] = useState({
    ProductName: '',
    ProductType: '',
    price: '',
    description: '',
    rating: '',
    photo: '',
    productCompany: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    const newProduct = {
      ...formValues,
    };

    console.log(newProduct);

    // send data to the server
    fetch('http://localhost:5000/product', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Product Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
        setFormValues({
          ProductName: '',
          ProductType: '',
          price: '',
          description: '',
          rating: '',
          photo: '',
          productCompany: '',
        });
      });
  };

  return (
    <div className="p-4 sm:p-8 md:p-16 lg:p-24">
      <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-extrabold mb-6">Add Product</h2>
      <form onSubmit={handleAddProduct} className="max-w-screen-sm m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="ProductName"
              value={formValues.ProductName}
              onChange={handleInputChange}
              placeholder="Product Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Type</span>
            </label>
            <select
              name="ProductType"
              value={formValues.ProductType}
              onChange={handleInputChange}
              className="select select-bordered select-md w-full max-w-xs">
              <option disabled value="">
                Product Type
              </option>
              <option>Fast Food</option>
              <option>Soft Drinks</option>
              <option>Coffee and Tea</option>
              <option>Cereals</option>
              <option>Snack Foods</option>
              <option>Bottled Water</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <input
              type="text"
              name="price"
              value={formValues.price}
              onChange={handleInputChange}
              placeholder="Product Price"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Short description</span>
            </label>
            <input
              type="text"
              name="description"
              value={formValues.description}
              onChange={handleInputChange}
              placeholder="Product description"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              value={formValues.rating}
              onChange={handleInputChange}
              placeholder="Rating"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <select
              name="productCompany"
              value={formValues.productCompany}
              onChange={handleInputChange}
              className="select select-bordered select-md w-full max-w-xs">
              <option disabled value="">
                Company Name
              </option>
              <option>Coca-Cola</option>
              <option>McDonald's</option>
              <option>Starbucks</option>
              <option>PepsiCo</option>
              <option>Nestlé</option>
              <option>Kelloggs</option>
            </select>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            value={formValues.photo}
            onChange={handleInputChange}
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />
        </div>
        <input type="submit" value="Add Product" className="btn btn-primary btn-block mt-6" />
      </form>
    </div>
  );
};

export default AddProduct;
