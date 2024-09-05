import { MdStar } from "react-icons/md";
import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";

const ProductDisplay = (props) => {
  const { product } = props;

  return;
  <section className="">
    <div className="">
      {/* left side */}
      <div className="">
        <div className="">
          <img src={product_rt_1} alt="prodcuct1" className=" max-h-[99px]" />
          <img src={product_rt_2} alt="prodcuct1" className=" max-h-[99px]" />
          <img src={product_rt_3} alt="prodcuct1" className=" max-h-[99px]" />
          <img src={product_rt_4} alt="prodcuct1" className=" max-h-[99px]" />
        </div>
        <div className="">
          <img src={product.image} alt="" />
        </div>
      </div>
      {/* right side */}
      <div className="">
        <h3 className="">{product.image}</h3>
        <div className="">
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
        </div>
      </div>
    </div>
  </section>;
};

export default ProductDisplay;
