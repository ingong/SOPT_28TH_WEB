import React from "react";
import Card from "../components/main/Card";
import Styled from "styled-components";
import { getCardData } from "../lib/api";
import NewCard from "../components/main/NewCard";

const MainWrap = Styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;

const Main = ({ year, month }) => {
  const [userData, setUserData] = React.useState(null);
  const [rawData, setRawData] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const data = await getCardData();
      setRawData(data);
      data[year] && setUserData(data[year][month]);
    })();
  }, [year, month]);

  return (
    <MainWrap>
      {userData &&
        userData.map((data, index) => {
          return <Card key={index} props={data} />;
        })}
      <NewCard
        rawData={rawData}
        year={year}
        month={month}
        setUserData={setUserData}
        id={userData ? userData.length + 1 : 1}
      />
    </MainWrap>
  );
};
export default Main;
