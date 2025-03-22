"use client";

import React, { memo } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles for the editor
import {
  RiSearchLine,
  RiNotificationLine,
  RiLockLine,
  RiCameraFill,
} from "react-icons/ri";

interface RichTextFieldProps {
  capsuleName: string;
  message: string;
  senderName: string;
  funds: string;
  currency: string;
  uploadedFile: File | null;
  onCapsuleNameChange: (value: string) => void;
  onMessageChange: (value: string) => void;
  onSenderNameChange: (value: string) => void;
  onFundsChange: (value: string) => void;
  onCurrencyChange: (value: string) => void;
  onFileUpload: (file: File) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RichTextField: React.FC<RichTextFieldProps> = memo(
  ({
    capsuleName,
    message,
    senderName,
    funds,
    currency,
    uploadedFile,
    onCapsuleNameChange,
    onMessageChange,
    onSenderNameChange,
    onFundsChange,
    onCurrencyChange,
    onSubmit,
  }) => {
    return (
      <div style={{ fontFamily: "Inter, sans-serif" }}>
        <div className="px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <header>
            <nav className="bg-white p-3 sm:p-4 flex flex-row items-center justify-between">
              {/* Left Side: Dashboard and Capsules */}
              <div className="flex items-center space-x-2">
                <a className="text-sm sm:text-base text-gray-500" href="#">
                  Dashboard
                </a>
                <span className="text-xl font-semibold sm:text-2xl text-gray-500">
                  /
                </span>
                <span className="text-xl font-semibold  sm:text-2xl text-gray-800 ">
                  Capsules
                </span>
              </div>

              {/* Right Side: Icons and User Profile */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* Search Icon */}
                <a className="text-gray-500" href="#">
                  <RiSearchLine className="text-lg sm:text-2xl" />
                </a>

                {/* Notification Icon */}
                <a className="text-gray-500" href="#">
                  <RiNotificationLine className="text-lg sm:text-2xl" />
                </a>

                {/* User Profile */}
                <div className="flex bg-sky-50 rounded-3xl sm:px-4 sm:py-2 p-3 items-center space-x-1 sm:space-x-2">
                  <Image
                    alt="User profile picture"
                    className="w-5 h-5 sm:w-8 sm:h-8 rounded-full"
                    src="/public/images/rocket.png"
                    width={32}
                    height={32}
                  />
                  <span className="text-xs sm:text-sm text-gray-800">
                    Assad User1
                  </span>
                </div>
              </div>
            </nav>
          </header>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Left Side */}
            <main className="bg-white p-6 lg:p-8 w-full lg:w-2/3 mt-8 lg:mr-8 rounded-lg">
              <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <RiLockLine className="text-yellow-600 text-3xl sm:text-4xl" />
                    <h1 className="text-2xl mt-2 sm:text-3xl font-semibold text-gray-800">
                      Create Your Time Capsule
                    </h1>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    Send a message into the future—text, media, or even crypto
                    gifts, sealed until the perfect moment.
                  </p>
                </div>
                {/* Step Indicator */}
                <div className="text-gray-500 mt-6 lg:mt-0 lg:ml-10">
                  <span className="text-sm sm:text-base">Step 1 of 3</span>
                  <div className="flex space-x-2 sm:space-x-4 pt-2 sm:pt-4">
                    <div className="h-1 w-8 sm:w-12 bg-green-600 rounded-sm"></div>
                    <div className="h-1 w-8 sm:w-12 bg-green-100 rounded-sm"></div>
                    <div className="h-1 w-8 sm:w-12 bg-green-100 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <form onSubmit={onSubmit}>
                <div className="mb-6 mt-8 ">
                  <label className="block text-sm sm:text-lg text-gray-700 mb-2">
                    <span className="font-semibold text-xl">Capsule Name:</span>{" "}
                    Give your capsule a meaningful title
                  </label>
                  <input
                    className="w-full p-3 mb-3 border bg-sky-50 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400"
                    placeholder="Name"
                    type="text"
                    value={capsuleName}
                    onChange={(e) => onCapsuleNameChange(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-24">
                  <label className="block text-sm sm:text-base text-gray-700 mb-2">
                    <span className="font-semibold text-xl">
                      Message (Optional):
                    </span>{" "}
                    Write something memorable...
                  </label>

                  <ReactQuill
                    value={message}
                    onChange={onMessageChange}
                    placeholder="Start Typing..."
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ["bold", "italic", "underline", "strike"],
                        [{ color: [] }, { background: [] }],
                        [{ align: [] }],
                        [{ list: "ordered" }, { list: "bullet" }],
                        [{ indent: "-1" }, { indent: "+1" }],
                        ["blockquote", "code-block"],
                        ["link"],
                        ["image"],
                        ["clean"],
                      ],
                      history: {
                        delay: 2000,
                        maxStack: 100,
                        userOnly: true,
                      },
                    }}
                    className="bg-sky-50 border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all h-80"
                  />
                </div>

                <div>
                  <label className="block text-xl sm:text-xl text-gray-700 font-semibold mb-2">
                    Sender Name
                  </label>
                  <input
                    className="w-full p-3 border bg-sky-50 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400"
                    placeholder="Enter a name"
                    type="text"
                    value={senderName}
                    onChange={(e) => onSenderNameChange(e.target.value)}
                    required
                  />
                </div>
              </form>
            </main>

            {/* Right Side */}
            <div className="bg-white p-6 lg:p-8 w-full lg:w-1/3 lg:mt-8 rounded-lg">
              <div>
                <h1 className="text-xl font-semibold text-gray-800 mb-4">
                  Upload Media
                </h1>
                <div className="bg-sky-50 rounded-lg p-6 flex flex-col items-center mb-8 justify-center">
                  <div className="bg-white w-full py-12 rounded-lg border-dashed border-2 border-gray-300 flex flex-col items-center justify-center relative">
                    {/* File Input (Hidden) */}
                    <input
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept="image/*, video/*"
                    />
                    {/* Upload Icon and Text */}
                    <div className="mb-4">
                      <RiCameraFill className="text-gray-400 text-5xl mb-2" />
                    </div>
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      Click to Upload or drag
                    </p>
                    <p className="text-sm text-gray-500">
                      (Max. File size: 25 MB)
                    </p>
                    {/* Display uploaded file name */}
                    {uploadedFile && uploadedFile.name && (
                      <p className="text-sm text-green-600 mt-2">
                        Uploaded: {uploadedFile.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xl sm:text-xl text-gray-700 font-semibold mb-2">
                  Attach Funds (Optional)
                </label>
                <input
                  className="w-full p-3 border bg-sky-50 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400"
                  placeholder="Enter amount to include in this capsule (e.g., 0.5 ETH)"
                  type="text"
                  value={funds}
                  onChange={(e) => onFundsChange(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block text-xl sm:text-xl text-gray-700 font-semibold mb-2">
                  Currency
                </label>
                <select
                  className="w-full p-3 border bg-sky-50 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400"
                  value={currency}
                  onChange={(e) => onCurrencyChange(e.target.value)}
                >
                  <option>ETH</option>
                  <option>BTC</option>
                  <option>USD</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save as Draft and Next Buttons */}
          <div className="flex justify-end m-8 space-x-4">
            <button
              className="text-sm sm:text-base text-gray-700 underline"
              type="button"
              onClick={() => alert("Draft saved!")}
            >
              Save as draft
            </button>
            <button
              className="bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg"
              type="submit"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  },
);

RichTextField.displayName = "RichTextField";

export default RichTextField;
