import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const HealthEssentials = () => {
  const { products } = useContext(ShopContext);
  const [healthEssentials, setHealthEssentials] = useState([]);

  useEffect(() => {
    const featuredProducts = products.filter((item) => item.bestseller);
    setHealthEssentials(featuredProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"HEALTH"} text2={"ESSENTIALS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover trusted medicines and healthcare essentials carefully
          selected to support the health and well-being of you and your family.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {healthEssentials.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default HealthEssentials;