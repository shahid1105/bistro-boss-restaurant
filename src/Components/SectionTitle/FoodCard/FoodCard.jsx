import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, price, recipe, image, _id } = item;

  const { user } = useContext(AuthContext);

  const [, refetch] = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("https://bistro-boss-server-dun-delta.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 p-2 rounded-lg text-xl font-bold bg-slate-900 text-white ">
        {" "}
        Price: ${price}
      </p>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        <p className="text-center mb-4 text-gray-400">{recipe}</p>

        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 border-[#BB8506] px-8 py-5">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
