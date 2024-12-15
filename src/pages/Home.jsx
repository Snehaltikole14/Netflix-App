import React from "react";
import "./home.css";
import Header from "../Components/Header";
import MiddlePart from "../components/MiddlePart";
import Account from "../components/Account";

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-color"></div>
      <Header />
      <div className="home">
        <p className="home-first-para">
          Unlimited movies,Tv
          <br /> shows and more
        </p>
        <p className="second-para">Starts at ₹149. Cancel at any time.</p>
        <p className="third-para">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <Account />
      </div>

      <div className="border-line">
        <img src="public/img1.png" alt="" />
        <MiddlePart />
       
      </div>
    </div>
  );
};

export default Home;
