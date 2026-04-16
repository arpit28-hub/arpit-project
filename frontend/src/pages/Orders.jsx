import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "../components/Title";
const Orders = () => {
  const { currency, products } = useContext(ShopContext);
  console.log();
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"}></Title>
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4  border-b border-gray-300 text-gray-700 flex flex-col md:flex-row md:items-center md"
          >
            <div className="flex sm:w-1/2 items-start gap-6  text-sm">
              <img src={item.image[0]} className="w-16 sm:w-20" alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3  text-base text-gray-500">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity:1</p>
                  <p>Size: M</p>
                </div>
                <p>
                  Date: <span className="text-gray-400">15 April, 2026</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2  align-center flex justify-between mt-4">
              <div className="flex items-center gap-2 border  border-green-500 rounded-full px-3">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base text-green-500">Ready to ship</p>
              </div>
              <button className="hover:bg-gray-100 border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order
              </button>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
