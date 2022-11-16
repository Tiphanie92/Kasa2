import "../styles/banner.css"
import banner from "../assets/banner.svg"
function Banner() {
    return (
        <div className='k-banner'>
        <img src={banner} alt='Kasa' className='k-banner__logo' />
        <h1 className="k-banner__titre">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner