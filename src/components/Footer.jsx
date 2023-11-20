import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center">
        <p className="text-center">
          &copy; {currentYear} बिहार गृह रक्षा वाहिनी, कटिहार
        </p>
      </div>
    </footer>
  );
};

export default Footer;
