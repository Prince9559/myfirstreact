import React from "react";

export default function Sear() {
  return (
    <div className="flex items-center justify-between bg-[#131921] text-white p-2 px-4 text-sm font-medium">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
          className="h-8"
        />
        <div className="flex items-center gap-1 cursor-pointer">
          <span role="img" aria-label="location">📍</span>
          <div className="leading-4">
            <p className="text-xs">Delivering to Lucknow 226006</p>
            <p className="font-semibold">Update location</p>
          </div>
        </div>
      </div>

      {/* Center Search Bar */}
      <div className="flex flex-grow max-w-2xl mx-4">
        <select className="bg-gray-200 text-black p-2 rounded-l-md border-r">
          <option>All</option>
          <option>99999999999999</option>
        </select>
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="w-full p-2 outline-none text-black"
        />
        <button className="bg-yellow-400 p-2 rounded-r-md">
          🔍
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1 cursor-pointer">
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="India Flag"
            className="h-4"
          />
          <span>EN ▾</span>
        </div>
        <div className="cursor-pointer">
          <p className="text-xs">Hello, sign in</p>
          <p className="font-semibold">Account & Lists ▾</p>
        </div>
        <div className="cursor-pointer">
          <p className="text-xs">Returns</p>
          <p className="font-semibold">& Orders</p>
        </div>
        <div className="cursor-pointer relative flex items-center">
          🛒
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full text-xs px-1">0</span>
          <p className="ml-1">Cart</p>
        </div>
      </div>
    </div>
  );
}
