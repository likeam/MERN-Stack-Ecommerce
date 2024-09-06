const ProductDescription = () => {
  return (
    <div className=" mt-20">
      <div className=" flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-sx !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-sx !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-sx !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className=" flex flex-col pb-16">
        <p className=" text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          odit nemo similique itaque? Sapiente quis facilis similique
          asperiores. Molestiae ipsa dicta impedit nihil inventore nisi ipsam
          voluptas suscipit minima, corporis obcaecati excepturi velit ex autem
          ea porro est voluptatem quisquam quibusdam nulla. Expedita,
          consequatur. Doloremque eaque provident deleniti excepturi assumenda
          consequatur porro culpa esse sunt!
        </p>
        <p className=" text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae
          ullam optio sed nihil. Odio laudantium distinctio non quas a delectus
          sapiente.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
