import { Helmet } from "react-helmet";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hoisting_token = import.meta.env.VITE_Image_Upload_Token;

const AdItem = () => {
  const [axiosSecure] = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hoisting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imageURL = imageResponse.data.display_url;
          const { name, recipe, category, price } = data;
          const newItem = {
            name,
            recipe,
            price: parseFloat(price),
            category,
            image: imageURL,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new item menu", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item Added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-16 ">
      <Helmet>
        <title>Bistro Boss | Add An Item</title>
      </Helmet>
      <div className="mb-14">
        <SectionTitle
          subHeading={"what's now!"}
          heading={"Add An item"}></SectionTitle>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F3F3F3] lg:p-12 md:p-12">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            {...register("name", { required: true, maxLength: 180 })}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex gap-6 mt-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue={"Pick One"}
              {...register("category", { required: true })}
              className="select select-bordered">
              <option disabled>Pick One</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Desserts</option>
              <option>Drinks</option>
              <option>Others</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              {...register("price", { required: true, maxLength: 180 })}
              type="number"
              placeholder="Price"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text font-semibold">Recipe details</span>
          </label>
          <textarea
            {...register("recipe", { required: true, maxLength: 180 })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"></textarea>
        </div>
        <div className="form-control w-full max-w-xs mt-4">
          <label className="label">
            <span className="label-text font-semibold">Item Image*</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <input
          className="btn btn-sm bg-gradient-to-r from-[#835D23] to-[#B58130] mt-5"
          type="submit"
          value="add item"
        />
      </form>
    </div>
  );
};

export default AdItem;
