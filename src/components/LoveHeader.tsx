import React from "react";
import HeartAnimation from "./HeartAnimation";

const LoveHeader = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl md:text-6xl font-bold text-love-primary mb-4 animate-float">
        YHC <HeartAnimation /> Adinda
      </h1>
      <p className="text-xl text-gray-600">Sonsuz Aşkımız</p>
    </div>
  );
};

export default LoveHeader;