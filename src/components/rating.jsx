import stars from "../assets/stars.svg";
import fullstars from "../assets/fullstars.svg";
import "../styles/rating.css";
function Rating(rating) {
  const arrayRating = [1, 2, 3, 4, 5];

  return (
    <div className="backgroundRating">
      {arrayRating.map((star, i) => (
        <span className="rating" key={i}>
          {star <= rating.ratings ? (
            <img src={fullstars} className="star" alt="star"></img>
          ) : (
            <img src={stars} className="star" alt="star"></img>
          )}
        </span>
      ))}
    </div>
  );
}

export default Rating;
