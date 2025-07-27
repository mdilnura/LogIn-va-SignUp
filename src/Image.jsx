import React from "react";

export default function Image({ image }) {
  return (
    <div className="mt-4">
      <img
        className="w-[300px] h-[200px] object-cover rounded-md"
        src={image.urls.regular}
      />
    </div>
  );
}
