import Item from "./Item";
import { POPULAR } from "../assets/data";



// const POPULAR = [
//   {
//     id:1,
//     name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     image:p1_img,
//     new_price:50.00,
//     old_price:80.50,
//   },
//   {id:2,
//     name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     image:p2_img,
//     new_price:85.00,
//     old_price:120.50,
//   },
//   {id:3,
//     name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     image:p3_img,
//     new_price:60.00,
//     old_price:100.50,
//   },
//   {id:4,
//     name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
//     image:p4_img,
//     new_price:100.00,
//     old_price:150.00,
//   },
// ];


const Popular = () => {
  return (
    <section className=" bg-primary">
      <div className=" max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h3 className=" h3 text-center">Popular Products</h3>
        <hr className=" h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
        {/* container */}
        <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {POPULAR.map((item) => (
            <Item key={item.id} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Popular