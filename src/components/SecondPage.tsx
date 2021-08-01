import React from "react";
import Layout from "./Layout";
import Phone from "./Phone";

const SecondPage = () => {
  return (
    <>
      <Layout info={<Phone />} final={false} />
    </>
  );
};

export default SecondPage;
