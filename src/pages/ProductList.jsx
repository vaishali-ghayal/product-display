import products from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductList = () => (
  <div className="mt-24">
    <h1>All Products</h1>
    <div className="flex flex-row justify-center flex-wrap">
    <div className="flex-1">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>

  </div>
);

export default ProductList;
