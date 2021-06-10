import React from "react";
import Styled from "styled-components";
import ProfileIcon from "../../assets/Profiles.svg";
import Menu from "../../assets/Menu.svg";
import { withRouter } from "react-router-dom";

const MainHeaderWrap = Styled.div`
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 91px;

    &__title {
      font-size: 36px;
      font-weight: bold;
      font-style: italic;
      color: #CEA0E3;
      &:hover {
        cursor: pointer;
      }
    }

    &__profile {
      margin-right: 10px;
    }

    &__hr {
      width: 1200px;
      height: 13px;
      background: linear-gradient(90deg, white, #CEA0E3);
    }
  }
`;

// npm install styled-components
const MainHeader = ({ history }) => {
  return (
    <MainHeaderWrap>
      <div className='header'>
        <img className='header__menu' src={Menu} alt='' />
        <div className='header__title' onClick={() => history.push("/")}>
          Diary App
        </div>
        <img className='header__profile' src={ProfileIcon} alt='' />
      </div>
      <div className='header__hr'></div>
    </MainHeaderWrap>
  );
};

export default withRouter(MainHeader);
