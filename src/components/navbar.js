import { useState, useEffect } from "react";
import "./styles.css";
import { Bars, NavMenu, NavBtn, Input } from "./navbarElements";
import WindowDimension from "./windowDimension";

const NavBar = () => {
  const { height, width } = WindowDimension();
  return (
    <div>
      <div
        className="nav"
        style={{
          display: "flex",
          justifyContent: "space-between",

          alignItems: "center",
          alignContent: "center",
          textAlign: "center",
          maxWidth: 1150,
          margin: "0%  auto",
        }}
      >
        <Bars src="https://cdn-icons-png.flaticon.com/512/1828/1828551.png" />
        <a href="#" style={{ color: "black", textDecoration: "none" }}>
          <h1>BookPad.</h1>
        </a>
        {/* <Bars src="https://cdn.onlinewebfonts.com/svg/img_197388.png" /> */}
        <NavMenu>
          <a
            href="#"
            style={{
              color: "black",
              textDecoration: "none",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <h3>Home</h3>
          </a>
          <a
            href="#"
            style={{
              color: "black",
              textDecoration: "none",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <h3>Categories</h3>
          </a>
          <a
            href="#"
            style={{
              color: "black",
              textDecoration: "none",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <h3>Podcasts</h3>
          </a>
        </NavMenu>
        {width > 768 ? (
          <input
            className="searchInput"
            style={{
              border: "none",
              textDecoration: "none",
              backgroundColor: "whitesmoke",
              height: 40,
              width: 200,
              borderRadius: 20,
              padding: 15,
              fontSize: 18,
              fontFamily: "FontAwesome",
            }}
            type="search"
            placeholder="&#61442; Search"
          />
        ) : (
          <label className="expandSearch">
            <input type="text" placeholder="Search..." name="search" />
            <img
              style={{ width: 20, height: 20 }}
              src="https://cdn.onlinewebfonts.com/svg/img_197388.png"
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default NavBar;
