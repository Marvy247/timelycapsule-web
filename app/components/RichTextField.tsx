"use client";

import React, { useCallback, memo } from "react";
import Image from "next/image";
import {
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
    onFileUpload,
    onSubmit,
  }) => {
    const handleFileUpload = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          if (file.size > 25 * 1024 * 1024) {
            alert("File size exceeds 25 MB limit.");
            return;
          }
          onFileUpload(file);
          alert(`File "${file.name}" uploaded successfully!`);
        }
      },
      [onFileUpload],
    );

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
                <div className="flex bg-sky-50 rounded-3xl p-1 sm:p-2 items-center space-x-1 sm:space-x-2">
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
                    <h1 className="text-2xl mt-2 sm:text-2xl font-semibold text-gray-800">
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
                    <div className="h-1 w-8 sm:w-12 bg-green-500 rounded-sm"></div>
                    <div className="h-1 w-8 sm:w-12 bg-green-100 rounded-sm"></div>
                    <div className="h-1 w-8 sm:w-12 bg-green-100 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <form onSubmit={onSubmit}>
                <div className="mb-6 mt-8">
                  <label className="block text-sm sm:text-base text-gray-700 mb-2">
                    <span className="font-semibold">Capsule Name:</span> Give
                    your capsule a meaningful title
                  </label>
                  <input
                    className="w-full p-3 border bg-sky-50 border-gray-300 rounded-lg"
                    placeholder="Name"
                    type="text"
                    value={capsuleName}
                    onChange={(e) => onCapsuleNameChange(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm sm:text-base text-gray-700 mb-2">
                    <span className="font-semibold">Message (Optional):</span>{" "}
                    Write something memorable...
                  </label>
                  <div className="bg-sky-50 border h-80 border-gray-300 rounded-lg p-2">
                    <div className="flex flex-wrap items-center justify-between bg-white space-x-4 p-2 rounded-lg">
                      <RiArrowGoBackFill className="text-lg sm:text-2xl" />
                      <RiArrowGoForwardFill className="text-lg sm:text-2xl" />
                      <RiBold className="text-lg sm:text-2xl" />
                      <RiItalic className="text-lg sm:text-2xl" />
                      <RiUnderline className="text-lg sm:text-2xl" />
                      <RiStrikethrough className="text-lg sm:text-2xl" />
                      <RiFontSize className="text-lg sm:text-2xl" />
                      <RiListUnordered className="text-lg sm:text-2xl" />
                      <RiListOrdered className="text-lg sm:text-2xl" />
                      <RiIndentDecrease className="text-lg sm:text-2xl" />
                      <RiIndentIncrease className="text-lg sm:text-2xl" />
                      <RiAlignLeft className="text-lg sm:text-2xl" />
                      <RiAlignCenter className="text-lg sm:text-2xl" />
                      <RiAlignRight className="text-lg sm:text-2xl" />
                      <RiAlignJustify className="text-lg sm:text-2xl" />
                    </div>
                    <textarea
                      className="w-full bg-sky-50 p-4 mt-6 rounded-lg italic text-gray-400"
                      placeholder="Start typing......"
                      value={message}
                      onChange={(e) => onMessageChange(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2">
                    Sender Name
                  </label>
                  <input
                    className="w-full p-3 border bg-sky-50 border-gray-300 rounded-lg"
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
                      onChange={handleFileUpload}
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
                <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2">
                  Attach Funds (Optional)
                </label>
                <input
                  className="w-full p-3 border bg-sky-50 border-gray-300 rounded-lg"
                  placeholder="Enter amount to include in this capsule (e.g., 0.5 ETH)"
                  type="text"
                  value={funds}
                  onChange={(e) => onFundsChange(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2">
                  Currency
                </label>
                <select
                  className="w-full p-3 border bg-sky-50 border-gray-300 rounded-lg"
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
