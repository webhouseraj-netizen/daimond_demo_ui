import React, { useState } from "react";

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpeg";
import img8 from "../../assets/8.jpeg";
import img9 from "../../assets/9.jpeg";
import img_2 from "../../assets/image/2.png";
import img_1 from "../../assets/image/1.png";
import img_3 from "../../assets/image/3.png";
import img_4 from "../../assets/image/4.png";
import img_5 from "../../assets/image/5.png";
import img_6 from "../../assets/image/6.png";
import img_7 from "../../assets/image/7.png";
import img_8 from "../../assets/image/8.png";
import img_9 from "../../assets/image/9.png";
import img_10 from "../../assets/image/10.png";
import img_11 from "../../assets/image/11.png";
import img_12 from "../../assets/image/12.png";
import img_13 from "../../assets/image/13.png";
import img_14 from "../../assets/image/14.png";
import img_15 from "../../assets/image/15.png";
import img_16 from "../../assets/image/16.png";

// All images in array, each ek object ho sakta hai
const images = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 7,
    img: img7,
  },

  {
    id: 8,
    img: img8,
  },

  {
    id: 9,
    img: img9,
  },
  {
    id: 10,
    img: img_2,
   
  },
   {
    id: 11,
    img: img_1,
   
  },
   {
    id: 12,
    img: img_3,

   
  }, {
    id: 13,
    img: img_4,
   
  }, {
    id: 14,
    img: img_5,
   
  }, {
    id: 15,
    img: img_6,
   
  }, {
    id: 16,
    img: img_7,
   
  }, {
    id: 17,
    img: img_8,
   
  }, {
    id: 18,
    img: img_9,
   
  }, {
    id: 19,
    img: img_10,
   
  }, {
    id: 20,
    img: img_11,
   
  }, {
    id: 21,
    img: img_12,
   
  }, {
    id: 22,
    img: img_13,
   
  }, {
    id: 23,
    img: img_14,
   
  },
  {
    id: 24,
    img: img_15,
   
  },
  {
    id: 25,
    img: img_16,
   
  },
];

const MunchGallery = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="min-h-auto bg-gradient-to-br from-[#b2b2c7] via-[#948aaa] to-[#aba9ad] p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-7xl m-auto">
        {images.map((img) => (
          <div
            key={img.id}
            className="bg-white/70 rounded-xl border border-transparent hover:border-cyan-500 hover:scale-105 cursor-pointer transition-all duration-300 overflow-hidden relative shadow-lg"
            onClick={() => setModalImg(img)}
            style={{ boxShadow: "0 4px 24px rgba(125, 100, 180, 0.10)" }}
          >
            <img
              src={img.img}
              alt={img.title}
              className="w-full h-76 object-cover transition-transform duration-300 ease-in-out"
              style={{ borderRadius: "18px" }}
            />
            {/* {img.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 rounded-b-xl">
                <h3 className="text-white font-semibold text-lg">{img.title}</h3>
                {img.description && <p className="text-xs text-gray-200">{img.description}</p>}
              </div>
            )} */}
          </div>
        ))}
      </div>

      {/* Modal for full image preview */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setModalImg(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex flex-col bg-white rounded-lg p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImg.img}
              alt={modalImg.title}
              className="max-h-[80vh] max-w-[85vw] object-contain rounded-lg"
              style={{ background: "#ccc" }}
            />
            <button
              className="absolute top-2 right-3 text-3xl text-red-700 hover:text-red-400 font-bold"
              onClick={() => setModalImg(null)}
              aria-label="Close Preview"
            >
              ×
            </button>
            {modalImg.title && (
              <div className="p-2 text-center">
                <h3 className="text-lg font-bold text-gray-800">
                  {modalImg.title}
                </h3>
                {modalImg.description && (
                  <p className="text-sm text-gray-500">
                    {modalImg.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MunchGallery;
