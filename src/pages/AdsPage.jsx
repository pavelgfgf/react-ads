import React from "react";
import AdsModule from "../modules/AdsModule";
import withAuth from "../HOCs/withAuth";


const AdsPage = () => {
  return <AdsModule />;
};

const ProtectedAdsPage = withAuth(AdsPage);
export default AdsPage;
