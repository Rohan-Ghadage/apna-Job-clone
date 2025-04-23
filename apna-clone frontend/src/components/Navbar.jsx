// src/components/Navbar.jsx
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import logo from "../assets/apna-logo.png";
import CareerDropdown from "./CareerDropdown";
import PhoneLoginModal from "./PhoneLoginModal";

const Navbar = () => {
    const [showJobsDropdown, setShowJobsDropdown] = useState(false);
    const [showCareerDropdown, setShowCareerDropdown] = useState(false);

    // phone login modal
    const [showPhoneModal, setShowPhoneModal] = useState(false);

    
  return (
    <>
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-100 relative shadow-sm">
      {/* Left: Logo + Nav Items */}
      <div className="flex items-center gap-6">
        <img src={logo} alt="Apna Logo" className="h-10 w-auto" />

        {/* Jobs + Dropdown container */}
        <div
            className="relative"
            onMouseEnter={() => setShowJobsDropdown(true)}
            onMouseLeave={() => setShowJobsDropdown(false)}
            >
            <button className="text-sm font-semibold hover:text-green-600">
                Jobs ▼
            </button>
            {showJobsDropdown && <Dropdown />}
        </div>

        <div
            className="relative"
            onMouseEnter={() => setShowCareerDropdown(true)}
            onMouseLeave={() => setShowCareerDropdown(false)}
            >
            <button className="text-sm font-semibold hover:text-green-600">
                Career Compass ▼
            </button>
            {showCareerDropdown && <CareerDropdown />}
        </div>




        <button className="text-sm font-semibold">
          Contests{" "}
          <span className="text-white bg-orange-500 rounded px-1 ml-1 text-xs">
            NEW
          </span>
        </button>
        <button className="text-sm font-semibold">
          Degree{" "}
          <span className="text-white bg-orange-500 rounded px-1 ml-1 text-xs">
            NEW
          </span>
        </button>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center gap-4">
          <button
            onClick={() => setShowEmployerModal(true)}
            className="text-green-700 font-medium"
          >
            Employer Login
          </button>
          <button
            onClick={() => setShowPhoneModal(true)} // 👈 show modal
            className="bg-green-700 text-white px-4 py-1 rounded"
          >
            Candidate Login
          </button>
        </div>
    </nav>

    

    <PhoneLoginModal
        isOpen={showPhoneModal}
        onClose={() => setShowPhoneModal(false)}
    />    

    </>
    
    
  );
};

export default Navbar;
