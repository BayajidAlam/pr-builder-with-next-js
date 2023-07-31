import MainLayout from "@/components/Layout/MainLayout";
import Featured from "@/components/UI/Featured";

const HomePage = ({ pcData }) => {

  return (
    <div className="container mx-auto">
      <h2 className="my-4">Featured Products</h2>
      <Featured pcData={pcData}></Featured>
    </div>
  );
};

export default HomePage;

// set page layout
HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

// load data (SSG)
export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/pc");
  const pcData = await res.json();

  return {
    props: {
      pcData,
    },
  };
}
