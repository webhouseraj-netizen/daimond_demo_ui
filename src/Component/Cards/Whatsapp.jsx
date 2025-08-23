// Whatsapp.jsx
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Whatsapp() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");

//   useEffect(() => {
//     async function fetchNumbers() {
//     //   try {
//     //     // Replace this URL with your actual API endpoint
//     //     // const response = await fetch("https://your-backend-api.com/api/contact-numbers");
//     //     const data = await response.json();

//     //     if (data.phone) setPhoneNumber(data.phone);
//     //     if (data.whatsapp) setWhatsappNumber(data.whatsapp.replace(/\D/g, ''));
//     //   } catch (error) {
//     //     console.error("Failed to load contact numbers:", error);
//     //   }
//     // }

//     fetchNumbers();
//   }, []);

  // While loading or if no numbers available, you can return null or fallback UI
//   if (!phoneNumber || !whatsappNumber) {
//     return console.log("hello");
       
    
//   }

  return (
    <div className="fixed bottom-[50px] right-[50px] flex flex-col items-center gap-4 z-100">
      <a
        href={`tel:${phoneNumber}`}
        className="bg-[#25d366] rounded-full p-4 shadow-lg cursor-pointer flex items-center justify-center
          animate-pulse hover:scale-110 transition-transform duration-300"
        title="Call us"
      >
        <FaPhoneAlt className="text-white text-4xl" />
      </a>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="bg-[#128C7E] rounded-full p-4 shadow-lg cursor-pointer flex items-center justify-center
          animate-pulse hover:scale-110 transition-transform duration-300"
        title="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-white text-4xl" />
      </a>
    </div>
  );
}
