import MainLayout from "@/components/Layout/MainLayout";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
