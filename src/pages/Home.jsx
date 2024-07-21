import Navbar from "../components/Navbar";
import Announcement from "../components/Announcment";
import Slider from "../components/Slider";
import Category from "../components/Category";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <Products />
    </div>
  );
};

export default Home;
