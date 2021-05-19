import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHeader from "./components/common/MainHeader";
import Title from "./components/common/Title";
import Footer from "./components/common/Footer";

const getCurrentDate = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  return { year: currentYear, month: currentMonth };
};

function App() {
  const [year, setYear] = useState(getCurrentDate().year);
  const [month, setMonth] = useState(getCurrentDate().month);
  return (
    <>
      <Router>
        <MainHeader />
        <Title />
      </Router>
      <Footer />
    </>
  );
}

export default App;
