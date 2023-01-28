import Banner from "../components/banner";
import Card from "../components/card";
import "../styles/home.css";
function Home() {
  return (
    <div className="home">
      <Banner url="home" />
      <Card />
    </div>
  );
}

export default Home;
