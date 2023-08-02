import MainLayout from '@/components/Layout/MainLayout';
import React from 'react';

const ProductDetailsPage = ({pcData}) => {
  console.log(pcData);
  return (
    <div>
      <h1>Product details page</h1>
    </div>
  );
};

export default ProductDetailsPage;


ProductDetailsPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticPaths() {
  const res = await fetch('http://localhost:5000/pc')
  const products = await res.json()
 
  const paths = products.map((product) => ({
    params: { productId: product._id },
  }))
 

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const {params} = context
  const res = await fetch(`http://localhost:5000/product/${params.productId}`);
  const pcData = await res.json();

  return {
    props: {
      pcData,
    },
  };
}
