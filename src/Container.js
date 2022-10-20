import React, { useState } from "react";
import MainPage from "./components/mainPage";
import PageOne from "./components/page1";
import PageTwo from "./components/page2";
import "./App.css";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("MainPage");
  const handlePageChange = (page) => setCurrentPage(page);

  const render = () => {
    if (currentPage === "MainPage") {
      return <MainPage handlePageChange={handlePageChange} />;
    }
    if (currentPage === "PageOne") {
      return <PageOne />;
    }
    if (currentPage === "PageTwo") {
      return <PageTwo />;
    }
  };

  return render();
}
