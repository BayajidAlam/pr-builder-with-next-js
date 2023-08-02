import React from "react";
import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const Featured = ({ pcData }) => {
  return (
    <div className="lg:flex items-center justify-center gap-4 my-8">
      {pcData.slice(0, 5).map((product, i) => (
        <Card
          className="w-full lg:w-[300px] shadow-2xl lg:mb-0 mb-4 p-2"
          key={i}
          style={{ width: 300 }}
          cover={
            <Image
              className="w-full lg:w-[200px]"
              src={product.image}
              width={300}
              height={250}
              alt="pc-featured"
            ></Image>
          }
        >
          <div>
            <p className="text-xl">{product?.name}</p>
            <p className="text-xl font-normal">
              Category:{" "}
              <span className="font-semibold">{product?.category}</span>
            </p>
            <p className="text-xl font-normal">
              Price: <span className="font-semibold">{product?.price}</span>
            </p>
            <p className="text-xl font-normal">
              Status: <span className="font-semibold">{product?.status}</span>
            </p>
            <p className="text-xl font-normal">
              Rating: <span className="font-semibold">{product?.rating}</span>
            </p>
          </div>
          <div className="text-right mt-2">
            <Link href={`/product/${product?._id}`}>
              <Button type="primary">View Details</Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Featured;
