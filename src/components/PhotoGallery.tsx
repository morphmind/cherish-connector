import React from "react";

const PhotoGallery = () => {
  const photos = [
    "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46",
    "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46",
    "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
        >
          <img
            src={photo}
            alt={`Memory ${index + 1}`}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;