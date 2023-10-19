import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const updateProduct = useLoaderData();

  const { ProductName, productCompany, _id, ProductType, price, description, rating, photo } = updateProduct;

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedProduct = {
      ProductName: form.ProductName.value,
      ProductType: form.ProductType.value,
      price: form.price.value,
      description: form.description.value,
      rating: form.rating.value,
      photo: form.photo.value,
      productCompany: form.productBrand.value,
    };

    // Send data to the server
    fetch(`http://localhost:5000/product/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // Display a success message using Swal
          Swal.fire({
            title: 'Success!',
            text: 'Product Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
        form.reset();
        form.classList.add("form-success"); // Add class for success message
      });
  };

  return (
    <div className="bg-gray-100 py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center my-4 font-bold font-serif">
        Update {ProductName} Details
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-lg mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-auto max-w-md">
        <h2 className="text-2xl font-extrabold mb-4">Update Product</h2>
        <form onSubmit={handleUpdateProduct} className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="w-full md:w-1/2">
              <label className="text-sm font-semibold">Product Name</label>
              <input
                type="text"
                defaultValue={ProductName}
                name="ProductName"
                placeholder="Product Name"
                className="input"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-sm font-semibold">Product Type</label>
              <select
                name="ProductType"
                defaultValue={ProductType}
                className="select"
              >
                <option disabled selected>
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
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="w-full md:w-1/2">
              <label className="text-sm font-semibold">Product Price</label>
              <input
                type="text"
                defaultValue={price}
                name="price"
                placeholder="Product Price"
                className="input"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-sm font-semibold">Product Short Description</label>
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Product Description"
                className="input"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="w-full md:w-1/2">
              <label className="text-sm font-semibold">Product Rating</label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Rating"
                className="input"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="text-sm font-semibold">Brand Name</label>
              <select
                className="select"
                name="productBrand"
                defaultValue={productCompany}
              >
                <option disabled selected>
                  Brand Name
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
          <div className="mb-4">
            <label className="text-sm font-semibold">Photo URL</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
              className="input"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update Product
          </button>
        </form>

      </div>
    </div>
  );
};

export default UpdateProduct;
