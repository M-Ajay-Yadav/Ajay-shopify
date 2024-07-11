import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>
        <Typewriter
          options={{
            strings: ["Welcome to E-Shop", "Find Your Style", "Shop Now"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
};

export default Home;
