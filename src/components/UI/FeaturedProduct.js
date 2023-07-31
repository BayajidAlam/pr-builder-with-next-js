import Image from "next/image";
import React from "react";

const FeaturedProduct = ({ allCategory }) => {
  
  return (
    <div className="lg:flex items-center justify-center gap-4 mb-8">
      {allCategory?.map((category) => (
        <div className="relative" key={category.id}>
          <Image
            src={category.image}
            width={205}
            height={250}
            alt={`${category.category}-image`}
          ></Image>
          <div className="absolute top-0 left-0 w-full h-full flex items-center">
            <p className="text-xl font-bold w-full text-center text-white">
              {category?.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProduct;
