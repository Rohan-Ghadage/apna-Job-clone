import React, { useState } from "react";

const PhoneInputModal = ({ isOpen, onSubmit, onClose }) => {
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    if (phone.length === 10) onSubmit(phone);
    else alert("Enter a valid 10-digit number");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-40">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button className="absolute top-2 right-3 text-xl" onClick={onClose}>
          ×
        </button>
        <h2 className="text-lg font-semibold mb-4">Enter Your Mobile Number</h2>
        <input
          type="tel"
          className="w-full border border-gray-300 p-2 rounded text-lg mb-4"
          placeholder="Enter mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/, ""))}
          maxLength={10}
        />
        <button
          onClick={handleContinue}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PhoneInputModal;
