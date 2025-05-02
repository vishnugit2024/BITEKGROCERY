import React from "react";
import Webfeature from "./components/Webfeature/Webfeature";

import FilterCatgory1 from "./components/CategoryByImage/FilterCatgory1";
import FilterCatgory2 from "./components/CategoryByImage/FilterCatgory2";

import HomeBanner from "./components/HomeBanner/HomeBanner";
import FilterCatgory3 from "./components/CategoryByImage/FilterCategory3";
import NewArrival from "./components/NewArrival/NewArrival";
import Featureproduct from "./components/FeatureProduct/Featureproduct";
import BestSeller from "./components/BestSeller/BestSeller";
import Testimonail from "./components/Testimonail/Testimonail";

const page = () => {
  return (
    <>
      <HomeBanner />
      <Webfeature />

      <FilterCatgory1 />
      <NewArrival />
      <FilterCatgory2 />
      <Featureproduct />
      <FilterCatgory3 />
      <BestSeller />
      <Testimonail />
    </>
  );
};

export default page;
