import Swal from "sweetalert2";

const AddCart = ({ newProduct }) => {
  const {
  
    _id,
    ProductName,
    UserEmail,
    productCompany,
    ProductType,
    price,
    description,
    rating,
    photo,
  } = newProduct;

  const handleDelete = _id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to use this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`https://food-and-beverage-server-xi.vercel.app/cart/${_id}`,{
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'Your Product has been deleted.',
              'success'
            )
          }
        })
      }
    })
  }
  
  return (
    <div className="max-w-7xl mx-auto">

      <div className="card card-side  shadow-xl">
        <figure>
          <img className="w-[400px]"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
        <h2 className="card-title">Product Name: {ProductName}</h2>
          <h2 className="card-title">Product Brand: {productCompany}</h2>
          <h2 className="card-title">Product Type: {ProductType}</h2>
          <h2 className="card-title">Product Price: {price}$</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-success hover:btn-neutral">Buy Now</button>
          <button onClick={() => handleDelete(_id)}
          className="btn btn-error hover:btn-secondary">Remove From Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
