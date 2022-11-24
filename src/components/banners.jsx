import "../styles/banner.css";
import banner from "../assets/banners.jpg";
import bannerMobile from "../assets/bannersMobile.jpg";
function Banner() {
  return (
    <div className="k-banner">
      <img src={banner} alt="Kasa" className="k-banner__logo" />
      <img
        src={bannerMobile}
        alt=""
        className="k-banners__logo k-banner__mobile"
      />
    </div>
  );
}

export default Banner;
