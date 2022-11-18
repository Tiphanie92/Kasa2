import "../styles/banner.css";
import banner from "../assets/banners.jpg";

function Banner() {
  return (
    <div className="k-banner">
      <img src={banner} alt="Kasa" className="k-banner__logo" />
    </div>
  );
}

export default Banner;
