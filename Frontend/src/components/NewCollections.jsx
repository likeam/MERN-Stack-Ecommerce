import { LATEST } from "../assets/data"
import Item from "./Item"


const NewCollections = () => {
  return (
    <section className=" bg-primary">
    <div className=" max_padd_container py-12 xl:py-28 xl:w-[88%]">
      <h3 className=" h3 text-center">Latest Products</h3>
      <hr className=" h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
      {/* container */}
      <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {LATEST.map((item) => (
          <Item key={item.id} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default NewCollections