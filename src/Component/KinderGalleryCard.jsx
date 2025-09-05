import axios from "axios";
import React, { useEffect, useState } from "react";

function KinderGalleryCard() {
    const [image, setImages]=useState([]);
     const [modalImg, setModalImg] = useState(null); // modal state
  const fetchImages = async () => {
    try {
      const res = await axios.get("https://daimondads-backend.onrender.com/api/getKinderGallery");
      console.log("API Response kinder:", res.data);

      if (res.data.success && res.data.image.length > 0) {
        // pehle document ke andar ke image array ko nikalo
        setImages(res.data?.image);
      } else {
        setImages([]); // agar kuch nahi mila to empty
      }
    } catch (err) {
      console.error("Error fetching images:", err);
   
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
     <div className="min-h-auto  to-[#aba9ad] p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 max-w-7xl m-auto">
        {image.map((img,index) => (
          <div
            key={index}
            className="bg-white/70 rounded-xl border border-transparent hover:border-cyan-500 hover:scale-105 cursor-pointer transition-all duration-300 overflow-hidden relative shadow-lg"
            onClick={() => setModalImg(img)}
            style={{ boxShadow: "0 4px 24px rgba(125, 100, 180, 0.10)" }}
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-76 object-cover transition-transform duration-300 ease-in-out"
              style={{ borderRadius: "18px" }}
            />
          
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
            className="relative max-w-[90vw] max-h-[90vh] flex flex-col bg-white rounded-lg p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImg.url}
              alt={modalImg.title}
              className="max-h-[80vh] max-w-[85vw] object-contain rounded-lg"
              style={{ background: "#ccc" }}
            />
            <button
              className="absolute top-0 right-3 rounded-full p-2 h-8  w-8 text-4xl flex justify-center items-center text-white  bg-black hover:text-red-400 font-bold cursor-pointer"
              onClick={() => setModalImg(null)}
              aria-label="Close Preview"
            >
              ×
            </button>
          </div>
        </div>
      )}

      
    </div>
  )
}

export default KinderGalleryCard;
