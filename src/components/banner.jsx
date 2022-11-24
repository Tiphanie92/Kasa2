import "../styles/banner.css";
import banner from "../assets/banner.jpg";
import bannerMobile from "../assets/bannerMobile.jpg";
function Banner() {
  return (
    <div className="k-banner">
      <img src={banner} alt="Kasa" className="k-banner__logo" />
      <img
        src={bannerMobile}
        alt=""
        className="k-banner__mobile k-banner__logo"
      />
      <h1 className="k-banner__titre">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
