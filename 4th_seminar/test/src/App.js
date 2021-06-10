import Main from "./pages/Main";
import Diary from "./pages/Diary";
import MainHeader from "./components/common/MainHeader";
import Calendar from "./components/common/Calendar";
import Title from "./components/common/Title";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserData } from "./lib/api.js";
// npm install --save react-router-dom

const getCurrentDate = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  return { year: currentYear, month: currentMonth };
};

function App() {
  const [year, setYear] = useState(getCurrentDate().year);
  const [month, setMonth] = useState(getCurrentDate().month);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getUserData();
      data[year] && setUserData(data[year][month]);
    })();
  }, [year, month]);
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Calendar currYear={year} setCurrYear={setYear} currMonth={month} setCurrMonth={setMonth} />
        <Title />
        <Switch>
          <Route
            exact
            path='/'
            component={() => {
              return <Main props={userData} />;
            }}
          />
          <Route exact path='/diary/:id' component={Diary} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
