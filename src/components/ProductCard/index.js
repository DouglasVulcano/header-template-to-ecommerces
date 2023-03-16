import "./ProductCard.css";
import PropTypes from "prop-types";

function ProductCard({ name, description, image }) {
  const onClick = () => {
    alert("Comprado!");
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="card-actions">
        <button onClick={onClick}>Comprar</button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
