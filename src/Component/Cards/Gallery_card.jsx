import React, { useState, useEffect } from "react";
import axios from "axios";

const categories = [
  { label: "All Work", value: "all" },
  { label: "Print Media", value: "Print Media" },
  { label: "Electronic Media", value: "Electronic Media" },
  { label: "Outdoor Publicity", value: "Outdoor Publicity" },
  { label: "Trade Fairs", value: "Trade Fairs" },
  { label: "Biopic Creation", value: "Biopic Creation" },
  { label: "Digital Marketing", value: "Digital Marketing" },
  {label:"Website Pic",value:"Website Pic"}
];

export default function Gallery_card() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [gallery, setGallery] = useState([]); // पूरा data
  const [filtered, setFiltered] = useState([]); // filter के बाद data
  const [selectedImg, setSelectedImg] = useState(null);

  // API call to fetch gallery data
  const fetchGallery = async () => {
    try {
      const res = await axios.get("https://daimondads-backend.onrender.com/api/getAllgallery");
      console.log("gallery image", res.data);
      setGallery(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.error("Error fetching gallery:", err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Filter logic (category + search)
  useEffect(() => {
    let temp = gallery;

    if (activeTab !== "all") {
      temp = temp.filter((item) => item.category === activeTab);
    }

    if (searchActive && search.trim()) {
      temp = temp
        ?.map((cat) => ({
          ...cat,
          image: cat.image.filter(
            (img) =>
              img.title.toLowerCase().includes(search.toLowerCase()) ||
              img.description.toLowerCase().includes(search.toLowerCase())
          ),
        }))
        .filter((cat) => cat.image.length > 0);
    }

    setFiltered(temp);
  }, [activeTab, searchActive, search, gallery]);

  return (
    <div className="min-h-auto bg-gradient-to-br from-[#b2b2c7] via-[#948aaa] to-[#aba9ad] p-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
        {categories?.map((cat) => (
          <button
            key={cat.value}
            className={`px-6 py-2 rounded-full font-medium transition cursor-pointer
              ${
                activeTab === cat.value
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800/40 text-white hover:bg-cyan-500/30 hover:text-black"
              }`}
            onClick={() => {
              setActiveTab(cat.value);
              setSearch("");
              setSearchActive(false);
            }}
          >
            {cat.label}
          </button>
        ))}

        <div className="flex items-center ml-4">
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-l-md bg-amber-200 text-black focus:outline-none w-40"
          />
          <button
            className="bg-cyan-500 text-white px-4 py-2 rounded-r-md font-semibold hover:bg-cyan-700 hover:text-black transition cursor-pointer"
            onClick={() => {
              setSearchActive(Boolean(search));
              setActiveTab("all");
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Images grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-7xl m-auto">
  {filtered.map((cat) =>
    cat?.items?.map((item, idx) =>
      item.type === "video" ? (
        // 🎥 Video Card
        <a
          key={idx}
          href={item.url} // 👈 direct YouTube पर redirect
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#6b4270]/50 rounded-xl border border-transparent hover:scale-105 cursor-pointer transition-all duration-300 overflow-hidden relative block"
        >
          {/* Autoplay Video */}
          <iframe
            className="w-full h-52"
            src={
              item.url.replace("youtu.be/", "www.youtube.com/embed/") +
              "?autoplay=1&mute=1" // autoplay + mute so browser allow
            }
            title={item.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Details */}
          <div className="p-2">
            <span className="inline-block mt-2 px-4 py-2 bg-cyan-700/90 text-white text-xl rounded-full w-fit">
              {cat.category}
            </span>
            <h3 className="text-white font-bold mt-2">
              {item.title.length > 50
                ? item.title.substring(0, 50) + "..."
                : item.title}
            </h3>
            <p className="text-gray-200 text-sm">
              {item.description.length > 80
                ? item.description.substring(0, 80) + "..."
                : item.description}
            </p>
          </div>
        </a>
      ) : (
        // 🖼 Image Card
        <div
          key={idx}
          className="bg-[#6b4270]/50 rounded-xl border border-transparent hover:border hover:scale-105 hover:border-cyan-500 cursor-pointer transition-all duration-300 overflow-hidden relative"
          onClick={() => setSelectedImg(item)} // 👈 sirf image ke liye modal open
        >
          <img
            src={item.url}
            alt={item.title}
            className="w-full h-52 object-cover"
          />
          <div className="p-1 flex flex-col gap-1">
            <span className="inline-block mt-2 px-4 py-2 bg-cyan-700/90 text-white text-xl rounded-full w-fit">
              {cat.category}
            </span>
          </div>
          <div className="p-1 flex flex-col gap-2">
            <span className="inline-block px-4 font-bold text-white text-md w-fit">
              {item.title}
            </span>
            <p className="text-sm mt-2 px-4 pb-2 text-white">
              {item.description}
            </p>
          </div>
        </div>
      )
    )
  )}
</div>


      {/* Modal Popup */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-4 max-w-2xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImg.url}
              alt={selectedImg.title}
              className="w-full h-96 object-contain mb-4"
            />
            <h3 className="text-lg font-bold">{selectedImg.title}</h3>
            <p className="text-sm text-gray-600">{selectedImg.description}</p>

            <button
              className="absolute top-2 right-2 text-2xl text-gray-800 hover:text-red-500 p-2"
              onClick={() => setSelectedImg(null)}
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
