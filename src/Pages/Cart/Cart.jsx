import  { useContext, useState } from "react";
import AddCart from "./AddCart";
import { AuthContext } from "../../firebase/Provider/AuthProvider";


const Cart = () => {
  const { user } = useContext(AuthContext);
  const [newCart, setNewCart] = useState([]);
  // console.log(user.email);

  fetch("http://localhost:5000/cart")
    .then((res) => res.json())
    .then((data) => {
      const filterCart = data.filter(
        (singleCart) => singleCart.UserEmail == user.email
      );
      setNewCart(filterCart);
    });
 
  

  return (
    <div>
      <div>
        <div>
          {newCart.length == 0 ? (
            <div>
              <p className="text-5xl font-bold mt-36 font-sans text-center ">
                SORRY!!
              </p>
              <p className="text-5xl font-bold  font-sans text-center ">
                No Product Added!!
              </p>
            </div>
          ) : (
            <div className="grid gap-10 justify-center grid-cols-1 ">
              {newCart?.map((newProduct) => (
                <AddCart
                  newProduct={newProduct}
                  key={newProduct.id}
                ></AddCart>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
