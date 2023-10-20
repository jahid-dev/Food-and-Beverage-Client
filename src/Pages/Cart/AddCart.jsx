
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const MySwal = withReactContent(Swal);

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

  const handleDelete = () => {
    MySwal.fire({
      title: "Remove from Cart",
      text: `Are you sure you want to remove ${ProductName} from your cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d9534f",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it",
      customClass: {
        container: "custom-swal-container",
      },
      showClass: {
        popup: "animate__animated animate__zoomIn",
      },
      hideClass: {
        popup: "animate__animated animate__zoomOut",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Make your DELETE request here and handle it accordingly
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="card card-side shadow-xl">
        <figure>
          <img className="w-[400px]" src={photo} alt={ProductName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Product Name: {ProductName}</h2>
          <h2 className="card-title">Product Brand: {productCompany}</h2>
          <h2 className="card-title">Product Type: {ProductType}</h2>
          <h2 className="card-title">Product Price: ${price}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success hover:btn-neutral">
              <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
            </button>
            <button
              onClick={handleDelete}
              className="btn btn-error hover:btn-secondary"
            >
              <FontAwesomeIcon icon={faTrash} /> Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
