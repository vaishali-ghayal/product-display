import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductInfo from "../components/ProductInfo";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => parseInt(p.id) === parseInt(id));

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className=" elevation-2 flex flex-row items-center
    w-full justify-center
    ">
      <ProductInfo {...product} />
      </div>
  );
};

export default ProductDetails;
