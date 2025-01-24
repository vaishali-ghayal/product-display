import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => (
  <div className="h-auto w-56 rounded-lg border border-gray-600 p-1 m-2 elevation-2 inline-flex flex-col items-center">
    <img className=" rounded-lg" src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.price}</p>
    <Link to={`/products/${product.id}`}>View Details</Link>
  </div>
);
ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
