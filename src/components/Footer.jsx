import LOGO from "../assets/LOGO-1.png"
import "../styles/footer.css"

function Footer() {
  return (
    <div className="k-footer">
      <p className="k-text">© 2020 Kasa. All rights reserved</p>
      <img src= {LOGO} alt= "kasa" className="k-logo1"/> 
    </div>
  )
}

export default Footer;
