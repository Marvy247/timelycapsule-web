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
      <div className="  ">
        <header>
          <nav className="bg-white  p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <a className="text-gray-500" href="#">
                Dashboard
              </a>
              <span className="text-gray-500 text-2xl">/</span>
              <span className="text-gray-800 text-2xl font-medium">
                Capsules
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a className="text-gray-500" href="#">
                <RiSearchLine className="text-2xl" />
              </a>
              <a className="text-gray-500" href="#">
                <RiNotificationLine className="text-2xl" />
              </a>
              <div className="flex bg-sky-50 rounded-3xl p-2 items-center space-x-2">
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
        <div className="flex justify-between  ">
          <main className="bg-white p-8 w-1/2 mt-8 mr-16 rounded-lg ">
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <RiLockLine className="text-yellow-600 text-4xl" />
                  <h1 className="text-2xl font-semibold mt-3 text-gray-800">
                    Create Your Time Capsule
                  </h1>
                </div>
                <p className="text-gray-600 mt-2">
                  Send a message into the future—text, media, or even crypto
                  gifts, sealed until the perfect moment.
                </p>
              </div>
              <div className="text-gray-500 ml-5 mt-6">
                <span>Step 1 of 3</span>
                <div className="flex space-x-4 pt-4">
                  <div className="h-1 w-12 bg-green-500 rounded-sm"></div>
                  <div className="h-1 w-12 bg-green-500 rounded-sm"></div>
                  <div className="h-1 w-12 bg-green-500 rounded-sm"></div>
                </div>
              </div>
            </div>
            <form>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 mt-14">
                  <span className="font-semibold">Capsule Name:</span> Give your
                  capsule a meaningful title
                </label>
                <input
                  className="w-full p-3 border bg-sky-100 border-gray-300 rounded-lg"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div className=" mb-6 ">
                <label className="block text-gray-700 mb-6 mt-12">
                  <span className="font-semibold">Message (Optional):</span>{" "}
                  Write something memorable...
                </label>

                <div className="bg-sky-50 border h-80 border-gray-300 rounded-lg p-2">
                  <div className="flex items-center justify-between bg-white space-x-4 p-4 rounded-lg">
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
                  <div className="bg-sky-50 p-4 mt-6 rounded-lg italic text-gray-400">
                    Start typing......
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Sender Name
                </label>
                <input
                  className="w-full p-3 border bg-sky-100 border-gray-300 rounded-lg"
                  placeholder="Enter a name"
                  type="text"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  className="bg-sky-50 text-gray-700 px-6 py-3 rounded-lg"
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
          {/* Right side content goes here */}
          <div className="bg-white p-16 w-1/2 mt-44 rounded-lg ">
            <div className="mb-10">
              <h1 className="text-xl font-semibold text-gray-800 mb-4">
                Upload Media
              </h1>
              <div className="bg-sky-50 rounded-lg p-12 flex flex-col items-center justify-center">
                <div className="bg-white px-48 py-20 rounded-lg border-dashed border-2 border-gray-300 flex flex-col items-center justify-center">
                  <div className="mb-4">
                    <RiCameraFill className="text-gray-400 text-5xl mb-2" />
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    Click to Upload or drag
                  </p>
                  <p className="text-sm text-gray-500">
                    (Max. File size: 25 MB)
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label className="block  text-gray-700 font-semibold mb-2">
                Attach Funds (Optional)
              </label>
              <input
                className="w-full p-3 border bg-sky-50 border-gray-300 rounded-lg"
                placeholder="Enter amount to include in this capsule (e.g., 0.5 ETH)"
                type="text"
              />
            </div>
            <div className="mb-6">
              <label className="block  text-gray-700 font-semibold mb-2">
                Currency
              </label>
              <select className="w-full p-3 border bg-sky-50 border-gray-300 rounded-lg">
                <option>ETH</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RichTextField);
