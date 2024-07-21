import React from "react";
import "../css/front.css";
import Resume from "./Resume";
function Front() {
  return (
    <>
      <div className="bg-cover bg-center h-screen relative">
        {/* Background with blur effect */}
        <div
          className="bgimg absolute inset-0 bg-cover bg-center filter blur z-0"
          style={{ backgroundImage: `url(${require("../images/p2.jpg")})` }}
        ></div>

        {/* Content */}
        <div className="relative text-white">
          <br /> <br />
          <br />
          

          <p className="text-5xl font-bold hello  ">Hello, I'm</p>
          <br />
          <p className="text-8xl font-bold mb-4 name ">Jatin Srivastava</p>
          <br />
          <p className="text-4xl mb-8 font-bold title ">
            MERN Stack Developer
          </p>
          <Resume/>
          <br />
          <p className=" container ta mx-auto text-lg text-gray-200 font-poppins">
            Greetings! I'm Jatin Srivastava, specializing in the MERN stack with
            a focus on crafting innovative web solutions. With a solid
            background in MongoDB, Express.js, React.js, and Node.js, I have
            developed robust applications that drive business growth. Whether
            it's designing intuitive front-end interfaces using React or
            architecting efficient back-end systems with Node.js and Express, I
            thrive on solving challenges and exceeding expectations. I am
            dedicated to continuous learning and staying updated with the latest
            trends in web development. Let's collaborate and build something
            remarkable together!
          </p>
        </div>
      </div>
    </>
  );
}

export default Front;
