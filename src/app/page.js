import React from "react";
import Webfeature from "./components/Webfeature/Webfeature";
import FilterCatgory1 from "./components/CategoryByImage/FilterCatgory1";
import FilterCatgory2 from "./components/CategoryByImage/FilterCatgory2";

const page = () => {
  return (
    <>
     <Webfeature />
     <FilterCatgory1 />
     <FilterCatgory2 />
    </>
  );
};

export default page;
