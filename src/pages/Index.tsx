import React from "react";
import LoveHeader from "../components/LoveHeader";
import LoveMessage from "../components/LoveMessage";
import PhotoGallery from "../components/PhotoGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-love-light">
      <div className="container mx-auto px-4 py-8">
        <LoveHeader />
        <LoveMessage />
        <PhotoGallery />
      </div>
    </div>
  );
};

export default Index;