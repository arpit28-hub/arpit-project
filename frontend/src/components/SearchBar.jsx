import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/shopContext";
const SearchBar = () => {
  const [visible, setVisible] = useState(false);
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("collection") && showSearch) {
      setVisible(true);
    }else{
        setVisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <div className="border-t  bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full sm:w-100">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img src={assets.search_icon} className="w-4" alt="" />
      </div>
      <img
        src={assets.cross_icon}
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
