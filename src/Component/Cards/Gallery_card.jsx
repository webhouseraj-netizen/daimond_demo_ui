import React, { useState } from 'react';
import out1 from "../../assets/out1.jpg";
import out2 from "../../assets/out2.jpg";
import out3 from "../../assets/out3.jpg";
import out4 from "../../assets/out4.jpg";
import print1 from "../../assets/print1.jpeg";
import print2 from "../../assets/print2.jpeg";
import trade1 from "../../assets/10.jpg";
import trade2 from "../../assets/11.jpg";
import trade3 from "../../assets/12.jpg";
import trade4 from "../../assets/13.jpg";
import trade5 from "../../assets/14.jpeg";

const categories = [
  { label: 'All Work', value: 'all' },
  { label: 'Print Media', value: 'print' },
  { label: 'Electronic Media', value: 'electronic' },
  { label: 'Outdoor Publicity', value: 'outdoor' },
  { label: ' Trade Fairs', value: 'trade' },
  { label: 'Biopic Creation', value: 'biopic' },
];

const images = [
  {
    id: 1,
    category: 'outdoor',
    title: 'Bus Shelter Advertisement',
    description: 'Strategic outdoor advertising placement',
    img: out1,
  },
  {
    id: 2,
    category: 'outdoor',
    title: 'Courtesy Hoarding',
    description: 'Large format outdoor advertising display',
    img: out2,
  }, {
    id: 3,
    category: 'outdoor',
    title: 'Courtesy Hoarding',
    description: 'Large format outdoor advertising display',
    img: out3,
  }, {
    id: 4,
    category: 'outdoor',
    title: 'Courtesy Hoarding',
    description: 'Large format outdoor advertising display',
    img: out4,
  }, {
    id: 5,
    category: 'print',
    title: 'Courtesy Hoarding',
    description: 'Large format outdoor advertising display',
    img: print1,
  },
  {
    id: 6,
    category: 'print',
    title: 'Courtesy Hoarding',
    description: 'Large format outdoor advertising display',
    img: print2,
  }, {
    id: 7,
    category: 'trade',
    title: 'Courtesy Hoarding',
    description: 'Large format outdoor advertising display',
    img: trade1,
  }, {
    id: 8,
    category: 'trade',
    title: 'Courtesy Hoarding',
    description: 'Large format outdoor advertising display',
    img: trade2,
  }, {
    id: 9,
    category: 'trade',
    title: 'Courtesy Hoarding',
    description: 'Large format outdoor advertising display',
    img: trade3,
  }, {
    id: 10,
    category: 'trade',
    title: 'Courtesy Hoarding',
    description: 'Large format outdoor advertising display',
    img: trade4,
  },
  {
    id: 11,
    category: 'trade',
    title: 'Courtesy Hoarding',
    description: 'Large format outdoor advertising display',
    img: trade5,
  },
];

export default function Gallery_card() {
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');
  const [searchActive, setSearchActive] = useState(false);

  // For modal popup
  const [selectedImg, setSelectedImg] = useState(null);

  // Filter images based on tabs and search
  let displayedImages = images;
  if (activeTab !== 'all') {
    displayedImages = displayedImages.filter(img => img.category === activeTab);
  }
  if (searchActive && search.trim()) {
    displayedImages = displayedImages.filter(
      img =>
        img.title.toLowerCase().includes(search.toLowerCase()) ||
        img.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="min-h-auto bg-gradient-to-br from-[#b2b2c7] via-[#948aaa] to-[#aba9ad] p-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
        {categories.map(cat => (
          <button
            key={cat.value}
            className={`px-6 py-2 rounded-full font-medium transition  cursor-pointer
              ${activeTab === cat.value
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                : 'bg-gray-800/40 text-white hover:bg-cyan-500/30 hover:text-black'}`}
            onClick={() => {
              setActiveTab(cat.value);
              setSearch('');
              setSearchActive(false);
            }}
          >
            {cat.label}
          </button>
        ))}
        {/* Search Box */}
        <div className="flex items-center ml-4">
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 rounded-l-md  bg-amber-200 text-black focus:outline-none w-40"
          />
          <button
            className="bg-cyan-500 text-white px-4 py-2 rounded-r-md font-semibold hover:bg-cyan-700 hover:text-black transition cursor-pointer"
            onClick={() => {
              setSearchActive(Boolean(search));
              setActiveTab('all');
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Images grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-7xl m-auto">
        {displayedImages.map(img => (
          <div
            key={img.id}
            className="bg-[#6b4270]/50 rounded-xl border border-transparent hover:border hover:scale-105 hover:border-cyan-500  cursor-pointer transition-all duration-300 hover:shadow-[x0px_4px_16px_rgba(255,0,0,0.5)] overflow-hidden relative"
            onClick={() => setSelectedImg(img)}
          >
            <div className="overflow-hidden">
              <img
                src={img.img}
                alt={img.title}
                className="w-full h-52 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col gap-2">
              <span className="inline-block mt-2 px-4 py-2 bg-cyan-700/90 text-white text-xl rounded-full w-fit">
                {img.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-4 max-w-md w-full flex flex-col items-center"
            onClick={e => e.stopPropagation()} // Prevent closing when modal itself is clicked
          >
            <img src={selectedImg.img} alt={selectedImg.title} className="w-full h-96 object-contain mb-4" />
            {/* <h3 className="text-xl font-bold mb-2">{selectedImg.title}</h3> */}
            {/* <p className="text-gray-700 mb-4">{selectedImg.description}</p> */}
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
