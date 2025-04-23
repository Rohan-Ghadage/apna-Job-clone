import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero-phone.png";

// Sample suggestions
const skillSuggestions = [
  "Graphic Designer",
  "UI/UX Designer",
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Data Analyst",
  "Marketing Executive",
];

const locationSuggestions = [
  "Anywhere in India",
  "Delhi",
  "Mumbai Metropolitan Region",
  "Bengaluru Region",
  "Kolkata Region",
  "Hyderabad Region",
];

export default function Hero() {
  const [skillInput, setSkillInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [experience, setExperience] = useState("");

  const [filteredSkills, setFilteredSkills] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [showSkillSuggestions, setShowSkillSuggestions] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // You could pass query params here if needed
    navigate("/search-jobs");
  };

  const handleSkillChange = (e) => {
    const value = e.target.value;
    setSkillInput(value);
    if (value.trim() === "") {
      setFilteredSkills([]);
      setShowSkillSuggestions(false);
      return;
    }
    const filtered = skillSuggestions.filter((skill) =>
      skill.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSkills(filtered);
    setShowSkillSuggestions(true);
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocationInput(value);
    const filtered = locationSuggestions.filter((loc) =>
      loc.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredLocations(filtered);
    setShowLocationSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setSkillInput(suggestion);
    setShowSkillSuggestions(false);
  };

  const handleLocationSelect = (loc) => {
    setLocationInput(loc);
    setShowLocationSuggestions(false);
  };

  return (
    <section className="bg-gray-100 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-3 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="text-left" style={{ width: "70vw" }}>
          <p className="text-lg uppercase font-bold mb-2" style={{ color: "#1F8268" }}>
            INDIA'S #1 JOB PLATFORM
          </p>
          <h1 className="text-6xl font-bold text-gray-800 leading-tight">
            Your job search ends here
          </h1>
          <p className="mt-4 text-2xl text-gray-800">
            Discover 50 lakh+ career opportunities
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mt-8 bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row gap-4 items-center">
            {/* Skill Input */}
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Enter skill (e.g. Graphic Designer)"
                value={skillInput}
                onChange={handleSkillChange}
                onBlur={() => setTimeout(() => setShowSkillSuggestions(false), 100)}
                onFocus={() => skillInput && setShowSkillSuggestions(true)}
                className="px-4 py-2 border border-gray-300 rounded-md w-full"
              />
              {showSkillSuggestions && filteredSkills.length > 0 && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {filteredSkills.map((skill, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(skill)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Experience Dropdown */}
            <div className="flex-1 w-full">
              <select
                className="px-4 py-2 border border-gray-300 rounded-md w-full"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="">Experience</option>
                <option value="fresher">Fresher</option>
                <option value="1">1+ Year</option>
                <option value="2">2+ Years</option>
                <option value="3">3+ Years</option>
                <option value="5">5+ Years</option>
              </select>
            </div>

            {/* Location Input */}
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Location (e.g. Delhi)"
                value={locationInput}
                onChange={handleLocationChange}
                onBlur={() => setTimeout(() => setShowLocationSuggestions(false), 100)}
                onFocus={() => locationInput && setShowLocationSuggestions(true)}
                className="px-4 py-2 border border-gray-300 rounded-md w-full"
              />
              {showLocationSuggestions && filteredLocations.length > 0 && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {filteredLocations.map((loc, index) => (
                    <li
                      key={index}
                      onClick={() => handleLocationSelect(loc)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="hover:shadow-lg text-white px-6 py-2 rounded-md w-full md:w-auto"
              style={{ backgroundColor: "#1F8268" }}
            >
              Search Jobs
            </button>
          </form>

          {/* Support & Trust Section */}
          <section className="bg-gray-100 py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-xl md:text-2xl font-semibold mb-6">Proud to Support</h2>
                <div className="flex justify-center flex-wrap gap-8 items-center">
                  <img src="src/assets/logos/labour.png" alt="Labour Ministry" className="h-12" />
                  <img src="src/assets/logos/aicte.png" alt="AICTE" className="h-12" />
                  <img src="src/assets/logos/dpiit.png" alt="DPIIT" className="h-12" />
                </div>
              </div>
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Trusted by 1000+ enterprises and 7 lakh+ MSMEs for hiring
                </h2>
              </div>
              <div className="overflow-hidden relative">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
                  <img src="src/assets/logos/shoppersstop.png" alt="Shoppers Stop" className="h-10" />
                  <img src="src/assets/logos/techmahindra.png" alt="Tech Mahindra" className="h-10" />
                  <img src="src/assets/logos/teleperformance.png" alt="Teleperformance" className="h-10" />
                  <img src="src/assets/logos/bajaj.png" alt="Bajaj" className="h-10" />
                  <img src="src/assets/logos/allianz.png" alt="Allianz" className="h-10" />
                  <img src="src/assets/logos/flipkart.png" alt="Flipkart" className="h-10" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Side Image */}
        <div
          className="flex justify-end items-end relative h-[500px] md:h-[500px] lg:h-[600px] overflow-hidden"
          style={{ width: "30vw" }}
        >
          <img
            src={heroImage}
            alt="Person holding phone"
            className="w-full h-auto object-contain md:translate-y-4 lg:translate-y-8"
          />
        </div>
      </div>
    </section>
  );
}
