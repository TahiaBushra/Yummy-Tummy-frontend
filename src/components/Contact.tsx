import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto py-20 px-4 md:px-0">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-center text-gray-800">
          Contact{" "}
          <span className="text-pink-500 font-semibold">Yummy😋Tummy</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-center text-gray-600 mb-10">
          Have a question or suggestion? We would love to hear from you! Reach
          out to us via email, phone, or visit our office.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Email Us</h2>
            <a
              href="mailto:contact@yummytummy.com"
              className="text-pink-500 text-lg font-bold hover:underline"
            >
              contact@yummytummy.com
            </a>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Call Us</h2>
            <p className="text-lg text-gray-600 font-bold">+123-456-7890</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Visit Us</h2>
            <p className="text-lg text-gray-600 font-bold">
              123 Yummy Street, Tasty City, Flavor Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
