import React from 'react';
import "./index.css";
import Header from "./components/header.jsx";
import BeansMain from "./components/beans-101-body/beans-main.jsx"

const Beans = () => {
  return (
      <>
          <Header title="Beans 101" tagline="Perfectly Roasted(Loved) Beans"
                 userClass="bg-cherry-red text-vanilla italiana"/>
          <BeansMain></BeansMain>
      </>
  );
};

export default Beans;
