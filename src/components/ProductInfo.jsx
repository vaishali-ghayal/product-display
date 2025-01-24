export default function ProductInfo(product) {
  return (
    <div>
      <h1>{product.name}</h1>
      <img
        className="h-auto max-w-lg rounded-lg mt-3"
        src={product.image}
        alt={product.name}
      />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
