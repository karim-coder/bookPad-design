import React from "react";
import "./styles.css";
import NavBar from "./components/navbar";
import WindowDimension from "./components/windowDimension";
import Writer from "./components/Writer";
import Color from "./constants/Color";
import Icon from "./components/Icon";

export default function App() {
  const { height, width } = WindowDimension();

  return (
    <div className="App ">
      <NavBar />
      <div
        style={{
          display: "block",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: width > 1300 ? 70 : 40,
            fontWeight: width > 1300 ? 900 : 600,
            fontFamily: "sans-serif-condensed",
          }}
        >
          Home of{" "}
          <span
            style={{
              color: Color.primary,
              fontFamily: "Gravitas One",
              fontWeight: 100,
              fontSize: width > 1300 ? 50 : 35,
            }}
          >
            100,000+
          </span>{" "}
          <br />
          books and podcasts
        </h1>
        <p
          style={{
            fontSize: width > 1300 ? 22 : 18,
            fontFamily: "'Trebuchet MS', sans-serif",
            color: "#8b8b8b",
            maxWidth: 400,
            margin: "auto",
            textAlign: "center",
          }}
        >
          Get the latest books and listen to the latest podcasts all in one
          place
        </p>
        <button
          style={{
            color: "white",
            backgroundColor: Color.primary,
            height: 55,
            margin: 30,
            fontSize: 18,
            fontWeight: 550,
            width: 180,
            borderRadius: 10,
            marginTop: 50,
            marginBottom: 80,
          }}
        >
          Get Started
        </button>
      </div>

      <div
        style={{
          display: width > 1300 ? "flex" : "",
          alignItems: "center",
          textAlign: "center",
          alignContent: "center",
          margin: "auto",
          width: "100%",
          // maxWidth: 1350,
        }}
      >
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1531053270060-6643c8e70e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80")`,
            maxWidth: width > 1300 ? 700 : 400,
            maxHeight: width > 1300 ? 450 : 280,

            width: width > 1300 ? 700 : 400,
            height: width > 1300 ? 500 : 280,
            borderRadius: 20,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            margin: "auto",
            // marginTop: 30,
            right: width > 1300 ? -50 : 0,
            position: "relative",
            backgroundSize: "cover",
          }}
        ></div>
        <div>
          <div
            style={{
              width: width > 1300 ? 550 : 350,
              height: width > 1300 ? 320 : 240,

              margin: "auto",
              top: width > 1300 ? 0 : -50,
              borderRadius: 25,
              marginTop: 30,
              backgroundColor: "white",
              left: width > 1300 ? -70 : 0,
              overflow: "hidden",
              position: "relative",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
              textAlign: "start",
            }}
          >
            <div style={{ display: "block", padding: 50, paddingRight: 100 }}>
              <p
                style={{
                  fontFamily: "'Trebuchet MS', sans-serif",
                  fontSize: width > 1300 ? 18 : 14,
                  color: Color.primary,
                  fontWeight: "bold",
                  margin: 0,
                  weight: 50,
                }}
              >
                LOREM IPSUM
              </p>
              <p
                style={{
                  fontSize: width > 1300 ? 48 : 22,
                  fontWeight: "bold",
                  marginTop: 10,
                  padding: 0,
                  marginBottom: 0,
                  weight: 50,
                }}
              >
                Lorem Ipsum dolor sit amet
              </p>
              <p
                style={{
                  fontFamily: "'Trebuchet MS', sans-serif",
                  fontSize: width > 1300 ? 18 : 14,
                  weight: 50,
                  color: "#9b9b9b",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              icon="https://cdn-icons.flaticon.com/png/512/3128/premium/3128212.png?token=exp=1640623074~hmac=7b7ed8ef139858f50bcdfc38b5ff5524"
              link="http://www.twitter.com"
            />
            <Icon
              icon="https://cdn-icons.flaticon.com/png/512/2175/premium/2175193.png?token=exp=1640623752~hmac=1a69930b57bf930e9e2a142be24a30fd"
              link="http://www.facebook.com"
            />
            <Icon
              icon="https://cdn-icons.flaticon.com/png/512/717/premium/717392.png?token=exp=1640623829~hmac=ca89f9fba3d05fb7ffc049b43e3db646"
              link="http://www.instagram.com"
            />
            <Icon
              icon="https://cdn-icons.flaticon.com/png/512/3128/premium/3128219.png?token=exp=1640623891~hmac=d799ca361cff28743d6d9d15ca839312"
              link="http://www.linkedin.com"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          textAlign: "center",
          alignContent: "center",
          margin: "auto",
          borderRadius: 20,
          marginTop: 70,
          backgroundColor: Color.primary,
          maxWidth: 1150,
        }}
      >
        <h1 style={{ paddingTop: 50, color: "white" }}>Featured Writers</h1>
        <div>
          <div style={{ display: "flex", flexFlow: "wrap" }}>
            <Writer
              name="Writer Name"
              url="https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?b=1&k=20&m=1303539316&s=170667a&w=0&h=ePGGvjsOR__-R2KSvZ67xXl2x-CkVzKg8q_WtvqLww0="
            />
            <Writer
              name="Writer Name"
              url="https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?b=1&k=20&m=1303539316&s=170667a&w=0&h=ePGGvjsOR__-R2KSvZ67xXl2x-CkVzKg8q_WtvqLww0="
            />
            <Writer
              name="Writer Name"
              url="https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?b=1&k=20&m=1303539316&s=170667a&w=0&h=ePGGvjsOR__-R2KSvZ67xXl2x-CkVzKg8q_WtvqLww0="
            />
            <Writer
              name="Writer Name"
              url="https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?b=1&k=20&m=1303539316&s=170667a&w=0&h=ePGGvjsOR__-R2KSvZ67xXl2x-CkVzKg8q_WtvqLww0="
            />
            <Writer
              name="Writer Name"
              url="https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?b=1&k=20&m=1303539316&s=170667a&w=0&h=ePGGvjsOR__-R2KSvZ67xXl2x-CkVzKg8q_WtvqLww0="
            />
            <Writer
              name="Writer Name"
              url="https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?b=1&k=20&m=1303539316&s=170667a&w=0&h=ePGGvjsOR__-R2KSvZ67xXl2x-CkVzKg8q_WtvqLww0="
            />
            <Writer
              name="Writer Name"
              url="https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?b=1&k=20&m=1303539316&s=170667a&w=0&h=ePGGvjsOR__-R2KSvZ67xXl2x-CkVzKg8q_WtvqLww0="
            />
            <Writer
              name="Writer Name"
              url="https://media.istockphoto.com/photos/one-beautiful-woman-looking-at-the-camera-in-profile-picture-id1303539316?b=1&k=20&m=1303539316&s=170667a&w=0&h=ePGGvjsOR__-R2KSvZ67xXl2x-CkVzKg8q_WtvqLww0="
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default App;
