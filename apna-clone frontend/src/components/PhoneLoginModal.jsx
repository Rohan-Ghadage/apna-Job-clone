import React, { useState } from "react";

const PhoneLoginModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");

  const isValid = phone.length === 10 && /^[0-9]+$/.test(phone);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button
          className="absolute top-2 right-3 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-lg font-semibold mb-3">Enter your mobile number</h2>
        <div className="flex items-center border rounded px-3 py-2 mb-4">
          <span className="text-gray-600 pr-2">+91</span>
          <input
            type="text"
            maxLength="10"
            className="outline-none flex-1"
            placeholder="Eg: 9876543210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <p className="text-xs text-gray-500 mb-4">
          By continuing, you agree to the Apna’s{" "}
          <span className="text-green-600 underline cursor-pointer">Terms of service</span> and{" "}
          <span className="text-green-600 underline cursor-pointer">Privacy Policy</span>
        </p>
        <button
          className={`w-full py-2 rounded ${
            isValid ? "bg-green-600 text-white" : "bg-gray-300 text-gray-500"
          }`}
          disabled={!isValid}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default PhoneLoginModal;
