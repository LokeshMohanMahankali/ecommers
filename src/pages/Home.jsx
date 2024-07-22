import Navbar from "../components/Navbar";
import Announcement from "../components/Announcment";
import Slider from "../components/Slider";
import Category from "../components/Category";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
