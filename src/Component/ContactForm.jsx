import  { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";

const dummyOfficeData = {
  officeAddress:
    "502, Shanti Heritage, Rukanpura, Bailey Road, Patna-800 014, Bihar",

  officePhone: "7903595077",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.998875099592!2d85.08217987539521!3d25.60505317745075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57bfee77a917%3A0xddd25c70e06d91e9!2sDiamond%20Ads!5e1!3m2!1sen!2sin!4v1756355809466!5m2!1sen!2sin",
  directions:
    "Our office is conveniently located on Bailey Road, one of Patna’s main commercial areas. Easily accessible by public transport and private vehicles with ample parking available.",
};
// console.log(mapSrc);

// Simulate fetch with a Promise that resolves after 1 second
;

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [officeData, setOfficeData] = useState();
  const [loading, setLoading] = useState(true);

 

 useEffect(() => {
  const fetchOffice = async () => {
    try {
      const res = await axios.get("https://daimondads-backend.onrender.com/api/getOffice");
      console.log(res.data.office ,"location"); // Check the API response
      if (res.data.office) {
        setOfficeData(res.data.office);
      }
    } catch (err) {
      console.error("Error fetching office:", err);
    } finally {
      setLoading(false); // Stop showing the loading screen
    }
  };
  fetchOffice();
}, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const service_id = import.meta.env.VITE_SERVICE_ID;
    const template_id = import.meta.env.VITE_TEMPLATE_ID;
    const public_id = import.meta.env.VITE_PUBLIC_ID;

      const templateParams = {
      from_name: form.name || "No name",
      from_email: form.email || "No email",
      subject: form.subject || "No subject",
      message: form.message || "No message",
    };
    console.log(
      "Sending with:",
      service_id,
      template_id,
      public_id,
      templateParams
    );

    emailjs.send(service_id, template_id, templateParams, public_id).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold text-purple-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-purple-200 to-gray-100 flex flex-col">
      {/* Contact Form Section */}
      <section className="flex flex-col items-center px-4 pt-12 pb-8">
        <form
          className="w-full max-w-4xl bg-[#2d2942]/90 p-8 rounded-xl shadow-lg text-white"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#1c1a2b] text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium">
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#1c1a2b] text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Subject *</label>
            <input
              type="text"
              name="subject"
              required
              placeholder="What's this about?"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#1c1a2b] text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              Your Message *
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your project or requirements..."
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#1c1a2b] text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition transform duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Office Section */}
      <section className="bg-[#17203b] py-12 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white">
          Visit Our <span className="text-blue-400">Office</span>
        </h2>
        <p className="mb-8 text-gray-300 text-center max-w-2xl">
          Located in the heart of Patna, our office is easily accessible and
          equipped with modern facilities for client meetings and consultations.
        </p>

        <div className="flex flex-col lg:flex-col gap-8 items-start w-full max-w-4xl m-auto">
          {/* Map */}
          <div className="w-full lg:w-4xl mb-6 lg:mb-0">
            <iframe
              src={officeData.mapSrc}
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="hover:scale-102 transition-transform duration-300 shadow-lg"
            ></iframe>
          </div>

          {/* Address & Directions */}
          <div className="w-full lg:w-4xl grid  md:grid-cols-2  gap-4 bg-[#202a43] p-6 rounded-xl text-white shadow-lg">
            <div className="w-1/2">
              <h3 className="text-xl font-semibold mb-2">Office Address</h3>
              <p className="text-gray-300 mb-1">{officeData.officeAddress}</p>
              <p className="text-blue-400">
                <a href={`tel:${officeData.officePhone}`}>
                    {officeData.officePhone}
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Directions</h3>
              <p className="text-gray-300">{officeData.directions}</p>
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(
                  officeData.officeAddress
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline mt-2 inline-block hover:text-green-300"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
