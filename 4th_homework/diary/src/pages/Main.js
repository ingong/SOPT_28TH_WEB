import React from "react";
import Card from "../components/main/Card";
import Styled from "styled-components";
import { getCardData } from "../lib/api";
import NewCard from "../components/main/NewCard";
import { withRouter } from "react-router-dom";

const MainWrap = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  width: 100%;
  gap: 25px 25px;
`;

const Main = ({ year, month, history }) => {
  const [userData, setUserData] = React.useState(null);
  const [rawData, setRawData] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const data = await getCardData();
      console.log(data);
      setRawData(data);
      data[year] && setUserData(data[year][month]);
    })();
  }, [year, month]);

  return (
    <MainWrap>
      {userData &&
        userData.map((data, index) => {
          return (
            <Card
              key={index}
              props={data}
              onClickFunc={() => history.push(`/diary/${data.id}`)}
            />
          );
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
export default withRouter(Main);
