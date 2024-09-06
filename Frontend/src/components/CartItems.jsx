import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

const CartItems = () => {
  const {
    all_products,
    cartItems,
    removeFromCart,
    addToCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  return (
    <section className=" max_padd_container pt-28">
      <table className=" w-full mx-auto">
        <thead>
          <tr className=" bg-slate-900/10 regular-18 sm:regular-20 text-start py-12">
            <th className=" p-1 py-2">Products</th>
            <th className=" p-1 py-2">Title</th>
            <th className=" p-1 py-2">Price</th>
            <th className=" p-1 py-2">Quantity</th>
            <th className=" p-1 py-2">Total</th>
            <th className=" p-1 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr
                  key={e.id}
                  className=" border-b border-slate-900/20 p-6 text-center text-gray-30"
                >
                  <td className="flexCenter">
                    <img
                      className=" rounded-lg ring-1 ring-slate-900/5 my-1"
                      src={e.image}
                      alt="productImage"
                      height={43}
                      width={43}
                    />
                  </td>
                  <td>
                    <div className=" line-clamp-3">{e.name}</div>
                  </td>
                  <td>Rs {e.new_price}</td>
                  <td className=" w-16 h-16 bg-white">{cartItems[e.id]}</td>
                  <td>Rs {e.new_price * cartItems[e.id]}</td>
                  <td>
                    <div className=" bold-22 pl-16">
                      <TbTrash onClick={() => removeFromCart(e.id)} />
                    </div>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      {/* Cart Details */}
      <div className=" flex flex-col gap-20 my16 p-8 md:flex-row rounded-md bg-white w-full max-w-[666px] xl:max-w-full">
        <div className=" flex flex-col gap-10">
          <h4 className="bold-20">Summary</h4>
          <div className="">
            <div className="flexBetween py-4">
              <h4 className="medium-16">Subtotal:</h4>
              <h4 className=" text-gray-30 font-semibold">
                Rs {getTotalCartAmount()}
              </h4>
            </div>
            <hr />
            <div className=" flexBetween py-4">
              <h4 className=" medium-16">Shipping Fee:</h4>
              <h4 className=" text-gray-30 font-semibold">Rs {100}</h4>
            </div>
            <hr />
            <div className=" flexBetween py-4">
              <h4 className="bold-18">Total:</h4>
              <h4 className="bold-18">Rs {getTotalCartAmount() + 100}</h4>
            </div>
          </div>
          <button className=" btn_dark_rounded w-44">Checkout</button>
          <div className=" flex flex-col gap-10">
            <h4 className="bold-20">Your coupon code enter here: </h4>
            <div className=" flexBetween pl-5 h-12 bg-primary rounded-full ring-1 ring-slate-900/10">
              <input
                type="text"
                placeholder="Coupon code"
                className=" bg-transparent border-none outline-none"
              />
              <button className="btn_dark_rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
