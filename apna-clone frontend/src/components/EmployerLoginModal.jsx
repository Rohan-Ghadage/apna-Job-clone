import React, { useState } from "react";

const EmployerLoginModal = ({ onClose, onNext }) => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      onNext(phone);
    } else {
      alert("Please enter a valid 10-digit number.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Employer Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter 10-digit phone number"
            value={phone}
            onChange={(e) => {
              if (/^\d{0,10}$/.test(e.target.value)) setPhone(e.target.value);
            }}
            className="border border-gray-300 px-3 py-2 rounded focus:outline-green-600"
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Get OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployerLoginModal;
