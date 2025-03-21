"use client"; // Marking this component as a Client Component

import React from "react";

import Image from "next/image";
import {
  RiArrowDropDownLine, // Added drop down icon
  RiSearchLine,
  RiNotificationLine,
  RiLockLine,
  RiArrowGoBackFill,
  RiArrowGoForwardFill,
  RiBold,
  RiItalic,
  RiUnderline,
  RiStrikethrough,
  RiAlignLeft,
  RiAlignCenter,
  RiAlignRight,
  RiAlignJustify,
  RiListUnordered,
  RiListOrdered,
  RiIndentDecrease,
  RiIndentIncrease,
  RiFontSize,
  RiCameraFill, // Added camera icon
} from "react-icons/ri";

const RichTextField = () => {
  return (
    <div className="">
      <div className=" mx-auto p-6">
        <header>
          <nav className="bg-white  p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <a className="text-gray-500" href="#">
                Dashboard
              </a>
              <span className="text-gray-500">/</span>
              <span className="text-gray-800 font-semibold">Capsules</span>
            </div>
            <div className="flex items-center space-x-4">
              <a className="text-gray-500" href="#">
                <RiSearchLine className="text-2xl" />
              </a>
              <a className="text-gray-500" href="#">
                <RiNotificationLine className="text-2xl" />
              </a>
              <div className="flex items-center space-x-2">
                <Image
                  alt="User profile picture"
                  className="w-8 h-8 rounded-full"
                  src="https://placehold.co/32x32"
                  width={32}
                  height={32}
                />
                <span className="text-gray-800">Assad User1</span>
                <RiArrowDropDownLine className="text-gray-500 text-2xl" />
              </div>
            </div>
          </nav>
        </header>
        <main className="bg-white p-8 w-1/2  mt-8 rounded-lg ">
          <div className="flex justify-between items-center mb-6">
            <div className="p-4">
              <div className="flex items-center">
                <RiLockLine className="text-yellow-500 mr-2 text-2xl" />
                <h1 className="text-xl font-semibold text-gray-800">
                  Create Your Timely Capsule
                </h1>
              </div>
              <p className="text-gray-600 mt-2">
                Send a message into the future—text, media, or even crypto
                gifts, sealed until the perfect moment.
              </p>
            </div>
            <div className="text-gray-500">
              <span>Step 1 of 3</span>
              <div className="flex space-x-4 mt-1">
                <div className="h-2 w-10 bg-green-500"></div>
                <div className="h-2 w-10 bg-green-500"></div>
                <div className="h-2 w-10 bg-green-500"></div>
              </div>
            </div>
          </div>
          <form>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                <span className="font-semibold">Capsule Name:</span> Give your
                capsule a meaningful title
              </label>
              <input
                className="w-full p-3 border bg-gray-100 border-gray-300 rounded-lg"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className=" mb-6 ">
              <label className="block text-gray-700 mb-2">
                <span className="font-semibold">Message (Optional):</span> Write
                something memorable...
              </label>

              <div className="bg-gray-50 border h-48 border-gray-300 rounded-lg p-2">
                <div className="flex items-center justify-between bg-white space-x-4 p-2 ">
                  <RiArrowGoBackFill className="text-2xl" />
                  <RiArrowGoForwardFill className="text-2xl" />
                  <RiBold className="text-2xl" />
                  <RiItalic className="text-2xl" />
                  <RiUnderline className="text-2xl" />
                  <RiStrikethrough className="text-2xl" />
                  <RiFontSize className="text-2xl" />
                  <RiListUnordered className="text-2xl" />
                  <RiListOrdered className="text-2xl" />
                  <RiIndentDecrease className="text-2xl" />
                  <RiIndentIncrease className="text-2xl" />
                  <RiAlignLeft className="text-2xl" />
                  <RiAlignCenter className="text-2xl" />
                  <RiAlignRight className="text-2xl" />
                  <RiAlignJustify className="text-2xl" />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg italic text-gray-400">
                  Start typing......
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Upload Media
              </label>
              <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">
                <RiCameraFill className="text-gray-400 text-3xl mb-2" />
                <p className="text-gray-400">Click to Upload or drag</p>
                <p className="text-gray-400">(Max. File size: 25 MB)</p>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Attach Funds (Optional)
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter amount to include in this capsule (e.g., 0.5 ETH)"
                type="text"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Currency
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>ETH</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Sender Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter a name"
                type="text"
              />
            </div>
            <div className="flex justify-between">
              <button
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg"
                type="button"
              >
                Save as draft
              </button>
              <button
                className="bg-green-500 text-white px-6 py-3 rounded-lg"
                type="submit"
              >
                Next
              </button>
            </div>
          </form>
        </main>
        <div className="w-1/2 bg-gray-100 p-4">
          {/* Right side content goes here */}
        </div>
      </div>
    </div>
  );
};

export default React.memo(RichTextField);
