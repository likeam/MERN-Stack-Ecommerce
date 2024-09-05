import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHd from "../components/ProductHd";
import ProductDisplay from "../components/ProductDisplay";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return;

  <section className="">
    <div className="">
      <ProductHd product={product} />
      <ProductDisplay product={product} />
    </div>
  </section>;
};

export default Product;
