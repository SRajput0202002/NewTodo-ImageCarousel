import React from "react";

const Products = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1 className="text-center font-semibold text-4xl bg-slate-400 py-4">
        My Product Page
      </h1>
      <div className=" flex w-full h-full">
        <div className="grid grid-cols-3 px-8 gap-8">
          {data.map((item, idx) => {
            return (
              <div className=" shadow-2xl text-center rounded-2xl object-contain p-2 w-[400px] h-[400px]">
                <img
                  className="mt-4 rounded-xl"
                  src={item.src}
                  alt={item.alt}
                  key={idx}
                />
                <div className="text-xl font-semibold mb-2">{item.name}</div>
                <div className="text-xl font-semibold mb-2">
                  Rs.{item.Price}
                </div>
                <div>
                  {" "}
                  <button className="px-4 py-1 font-semibold mb-2 bg-slate-400 rounded-xl">
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
