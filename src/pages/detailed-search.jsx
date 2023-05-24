import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Home4 from "../components/home-4";

const index = () => {
  return (
    <>
      <Seo pageTitle="البحث المفصل" />
      <Home4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
