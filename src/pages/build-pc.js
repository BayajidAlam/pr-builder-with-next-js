import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const allCategory = [
  {
    id: 1,
    image: "https://i.ibb.co/5MM8G7B/processor.jpg",
    category: "Processor",
    categoryName: "cpu",
  },
  {
    id: 2,
    image: "https://i.ibb.co/SyD9w4q/download.jpg",
    category: "Motherboard",
    categoryName: "motherboard",
  },
  {
    id: 3,
    image: "https://i.ibb.co/gRVK9XR/istockphoto-92434128-612x612.jpg",
    category: "RAM",
    categoryName: "ram",
  },
  {
    id: 4,
    image: "https://i.ibb.co/4pJ2cZt/7-ME636b-QNGEGGrg5q-Et-Wr-K.jpg",
    category: "Power Supply Unit",
    categoryName: "psu",
  },
  {
    id: 5,
    image: "https://i.ibb.co/jMY0yT5/3f783785c3a938be5b54aa46acfc307b.jpg",
    category: "Storage Device",
    categoryName: "storage",
  },
  {
    id: 6,
    image: "https://i.ibb.co/zsFrSCH/images.jpg",
    category: "Monitor",
    categoryName: "monitor",
  },
  {
    id: 7,
    image: "https://i.ibb.co/8m4CNjn/images-1.jpg",
    category: "Others",
    categoryName: "others",
  },
];

const PcBuilderPage = () => {

  
  return (
    <div className="container mx-auto py-12">
      <div className="lg:w-1/3 p-2 bg-gradient-to-r from-blue-500 to-fuchsia-500  mx-auto">
        {allCategory.map((category, i) => (
          <div className="flex justify-between p-2 items-center" key={i}>
            <Image
              src={category.image}
              width={100}
              height={100}
              alt={`${category.category}-image`}
            ></Image>
            <p className="text-xl font-bold text-gray-300">
              {category.category}
            </p>
            <Link href={`/${category.categoryName}`}>
              {" "}
              <Button type="primary">Choose</Button>
            </Link>
          </div>
        ))}
        <div className="text-center mb-3">
          <Button type="primary">Complete Build</Button>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
