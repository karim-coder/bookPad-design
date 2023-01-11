import styled from "styled-components";

export const Bars = styled.img`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    width: 30px;
    height: 30px;
    /* position: absolute; */
    /* top: 0; */
    /* left: 5%; */
    /* transform: translate(80%, 100%); */
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  // margin-right: -24px;
  /* 2nd Nav */
  // margin-right: 24px;
  /* 3nd Nav */
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* 2nd Nav */
  justify-content: flex-end;
  white-space: nowrap;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Input = styled.div`
  border: none;
  backgroundcolor: red;
  height: 40px;
  width: 100px;
  borderradius: 20px;
  padding: 15px;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
