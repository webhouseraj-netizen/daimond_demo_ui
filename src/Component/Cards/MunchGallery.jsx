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


// All images in array, each ek object ho sakta hai
const images = [
  {
    id: 1,
    img: img1,
   
  },
  {
    id: 2,
    img: img2,
   
  },{
    id: 3,
    img: img3,
   
  },{
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
  
  
];

const MunchGallery = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="min-h-auto bg-gradient-to-br from-[#b2b2c7] via-[#948aaa] to-[#aba9ad] p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-7xl m-auto">
        {images.map(img => (
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
            onClick={e => e.stopPropagation()}
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
                <h3 className="text-lg font-bold text-gray-800">{modalImg.title}</h3>
                {modalImg.description && (
                  <p className="text-sm text-gray-500">{modalImg.description}</p>
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
