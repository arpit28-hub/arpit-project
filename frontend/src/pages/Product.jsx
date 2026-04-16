import React, { useContext, useEffect, useState } from "react";
import RelatedProducts from "../components/RelatedProducts";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/assets";
const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        console.log(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in  duration-500 opacity-100 ">
      <div className="flex gap-12 sm:gap-12  flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {/* product images */}
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>
        {/*--------------------------- product-info------------------------ */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`py-2 px-4 bg-gray-100 border cursor-pointer ${item === size ? "border-gray-500" : "border-transparent"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original peoduct.</p>
            <p>Cash on delivery is available on this Product</p>
            <p>Easy Return and exchange policy within & days.</p>
          </div>
        </div>
      </div>
      {/* -------------Description and Review Section ------------- */}
      <div className="mt-20">
        <div className="flex ">
          <b className="border border-gray-400 px-5 py-3 text-sm">
            Description
          </b>
          <p className="border border-gray-400 px-5 py-3 text-sm">
            Reviews(122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-400">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis accusamus minus atque blanditiis aspernatur vero fugit
            minima corporis recusandae temporibus omnis repellendus dolor, sint
            maxime aut, odit inventore quisquam voluptatum voluptatibus iste. A,
            sequi quidem fugit aliquam quae quis sint illum distinctio. Aperiam
            at delectus obcaecati quibusdam? Quis, quaerat molestiae?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            facere sed magnam. Tempora iure eaque, tenetur ipsum neque
            praesentium sunt ad vel rem magni maxime eligendi beatae quidem
            atque enim, similique libero sapiente commodi obcaecati repellat
            aspernatur necessitatibus nulla voluptates dolorem. Omnis mollitia
            corrupti aliquam in veritatis maxime labore distinctio aperiam esse
            sequi rem sapiente repellendus et, vitae voluptatibus temporibus
            dicta ducimus! Aut illo laborum dolores sit! Dolorum repudiandae
            minus fugit corporis eveniet magnam rem consectetur, deleniti
            voluptatibus veniam facilis.
          </p>
        </div>
      </div>
      {/* --------------display realted products--------------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
