import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="mt-24 mb-24 bg-fixed featured-item text-white pt-8 my-20">
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"Featured Items"}></SectionTitle>
      <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase"> Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quibusdam accusamus voluptatem. Perferendis ullam excepturi dolor
            maxime, aliquam est. Ab sequi reprehenderit consequatur explicabo
            sed cum velit modi suscipit sapiente fuga autem nam, iste, qui,
            soluta ipsa aperiam vitae fugit. Laudantium autem velit minima animi
            eligendi suscipit inventore, illum error.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
