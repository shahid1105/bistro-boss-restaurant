import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <section className="mb-12 mt-24">
      <SectionTitle
        subHeading={"Popular Items"}
        heading={"From Our Menu"}></SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 mt-20">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <p className="text-center mt-8">
        <button className="btn btn-outline border-0 border-b-4 mt-4 font-bold">
          View Full Menu
        </button>
      </p>
    </section>
  );
};

export default PopularMenu;
