import React from "react";
import Approved from "./Approved";
import Layout from "./Layout";

const FinalPage = () => {
  return (
    <>
      <Layout info={<Approved />} final={true} />
    </>
  );
};

export default FinalPage;
