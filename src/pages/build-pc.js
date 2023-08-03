import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const PcBuilderPage = ({ compo }) => {
  const { products } = useSelector((state) => state.pc);

  return (
    <div className="container mx-auto py-12">
      <div className="lg:w-1/3 p-2 bg-gradient-to-r from-blue-500 to-fuchsia-500  mx-auto">
        {compo.map((category, i) => (
          <div key={i}>
            <div className="flex justify-between p-2 items-center">
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
          </div>
        ))}
        <div className="text-center mb-3">
          <Button disabled={products.length !== 6} type="primary">
            Complete Build
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/builder-data");
  const data = await res.json();
  return {
    props: {
      compo: data,
    },
    revalidate: 10,
  };
};
