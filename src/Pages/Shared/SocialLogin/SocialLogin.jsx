import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      const savedUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      fetch("https://bistro-boss-server-dun-delta.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then(() => {
          Swal.fire({
            title: "User Login successful",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div className="p-4">
      <div className="divider"></div>
      <div
        onClick={handleGoogleSignIn}
        className="border-4 border-gray-400 hover:bg-primary rounded-2xl">
        <div className="text-center px-4 flex items-center gap-4">
          <button className="btn btn-circle btn-outline">
            <FaGoogle></FaGoogle>
          </button>
          <p className="font-bold text-red-600">Login With Google</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
