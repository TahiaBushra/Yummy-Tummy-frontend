import React from "react";

const About = () => {
  return (
    <div id="about" className="container mx-auto py-20 px-4 md:px-0">
      <div className=" p-10 bg-white-100 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-center text-gray-800">
          About{" "}
          <span className="text-pink-500 font-semibold">Yummy😋Tummy</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-center text-gray-600 mb-10">
          Welcome to{" "}
          <span className="text-pink-500 font-semibold">Yummy😋Tummy</span>! We
          are dedicated to revolutionizing the way you enjoy food. Whether you
          want to discover new restaurants, order your favorite meals, or even
          start your own culinary venture,{" "}
          <span className="text-pink-500 font-semibold">Yummy😋Tummy</span> is
          here to make it deliciously simple.
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center gap-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 font-bold">
              To connect food lovers with their favorite dishes and empower
              local restaurants to thrive.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 font-bold">
              We offer a seamless platform for ordering food, exploring diverse
              cuisines, and supporting local businesses.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Join Us</h2>
            <p className="text-lg text-gray-600 font-bold">
              Whether you are a foodie, a restaurant owner, or a passionate
              chef,{" "}
              <span className="text-pink-500 font-semibold">Yummy😋Tummy</span>{" "}
              welcomes you to our community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
