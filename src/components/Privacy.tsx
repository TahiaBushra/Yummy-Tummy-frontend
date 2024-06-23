import React from "react";

const Privacy = () => {
  return (
    <div id="privacy" className="container mx-auto py-20 px-4 md:px-0">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-center text-gray-800">
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-center text-gray-600 mb-10">
          At <span className="text-pink-500 font-semibold">Yummy😋Tummy</span>,
          we prioritize the privacy and security of our users information. This
          policy outlines how we collect, use, and protect your data.
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center gap-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Data Collection
            </h2>
            <p className="text-lg text-gray-600 font-bold">
              We collect data for order processing, account management, and
              personalization.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Data Usage
            </h2>
            <p className="text-lg text-gray-600 font-bold">
              Your data is used to improve our services, personalize content,
              and ensure a seamless user experience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Data Security
            </h2>
            <p className="text-lg text-gray-600 font-bold">
              We implement advanced security measures to protect your
              information from unauthorized access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
