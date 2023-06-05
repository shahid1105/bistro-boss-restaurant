import { Helmet } from "react-helmet";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm/CheckOutForm";
import useCart from "../../../Hooks/useCart";

// TODO: published able key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart] = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | dashboard | payment</title>
      </Helmet>
      <div className="mb-14">
        <SectionTitle
          subHeading={"Please process"}
          heading={"Payment"}></SectionTitle>
      </div>
      <Elements stripe={stripePromise}>
        <CheckOutForm cart={cart} price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
