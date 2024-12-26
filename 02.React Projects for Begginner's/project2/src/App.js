import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Calc, Accordions, Pnf,Header,Footer, FormValidation, Testimonials } from "./components";
import { accordionData } from "./components/accordions/utils/content";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path={`/`} element={<Calc />} />
            <Route path={`/calc`} element={<Calc />} />
            <Route path={`/testimonials`} element={<Testimonials />} />
            <Route path={`/accordions`} element={<Accordions Accordions={accordionData} />} />
            <Route path={`/validation`} element={<FormValidation />} />
            <Route path={`/*`} element={<Pnf />} />
            <Route path={`/layout`} element={<Header/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
