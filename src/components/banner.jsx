import "../styles/banner.css";
import bannerHome from "../assets/banner.jpg";
import bannerMobileHome from "../assets/bannerMobile.jpg";
import bannerAbout from "../assets/banners.jpg";
import bannerMobileAbout from "../assets/bannersMobile.jpg";
function Banner(e) {
  if (e.url === "home") {
    return (
      <div className="k-banner">
        <div className="k-image">
          <img src={bannerHome} alt="Kasa" className="k-banner__logo" />
          <img
            src={bannerMobileHome}
            alt=""
            className="k-banner__mobile k-banner__logo"
          />
        </div>
        <h1 className="k-banner__titre">Chez vous, partout et ailleurs</h1>
      </div>
    );
  } else if (e.url === "about") {
    return (
      <div className="k-banner">
        <img src={bannerAbout} alt="Kasa" className="k-banner__logo" />
        <img
          src={bannerMobileAbout}
          alt=""
          className="k-banners__logo k-banner__mobile"
        />
      </div>
    );
  }
}

export default Banner;
