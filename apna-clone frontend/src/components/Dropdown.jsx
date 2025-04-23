import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const menuItemsLeft = [
    "Work From Home Jobs",
    "Part Time Jobs",
    "Freshers Jobs",
    "Jobs for women",
    "Full Time Jobs",
    "Night Shift Jobs",
  ];

  const menuItemsRight = [
    "Jobs By City",
    "Jobs By Department",
    "Jobs By Company",
    "Jobs By Qualification",
    "Others",
  ];

  const submenus = {
    "Jobs By City": ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"],
    "Jobs By Department": ["Engineering", "Marketing", "HR", "Finance"],
    "Jobs By Company": ["Google", "Amazon", "TCS", "Infosys"],
    "Jobs By Qualification": ["B.E/B.Tech", "MBA", "B.Sc", "MCA"],
    Others: ["Remote Jobs", "Walk-in Interviews", "Freelance Jobs"],
  };

  // Helper to convert label into slug for the URL
  const slugify = (text) =>
    text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

  const handleClick = (parentItem, subItem) => {
    let route = "";

    switch (parentItem) {
      case "Jobs By City":
        route = `/jobs/city/${slugify(subItem)}`;
        break;
      case "Jobs By Department":
        route = `/jobs/department/${slugify(subItem)}`;
        break;
      case "Jobs By Company":
        route = `/jobs/company/${slugify(subItem)}`;
        break;
      case "Jobs By Qualification":
        route = `/jobs/qualification/${slugify(subItem)}`;
        break;
      case "Others":
        route = `/jobs/others/${slugify(subItem)}`;
        break;
      default:
        route = "/";
    }

    navigate(route);
  };

  const commonClass =
    "cursor-pointer hover:text-green-600 hover:font-semibold transition flex justify-between items-center relative";

  return (
    <div className="absolute z-10 mt-2 w-[500px] bg-white border shadow-md p-4 grid grid-cols-2 gap-4">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-2">
        {menuItemsLeft.map((item, idx) => (
          <span key={idx} className={commonClass}>
            {item}
          </span>
        ))}
      </div>

      {/* RIGHT SIDE with submenus */}
      <div className="flex flex-col gap-2">
        {menuItemsRight.map((item, idx) => (
          <div
            key={idx}
            className="relative"
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className={commonClass}>
              {item}
              <span className="ml-2 absolute right-0">→</span>
            </span>

            {hoveredItem === item && (
              <div className="absolute top-0 left-full w-48 bg-white border shadow-md p-2 z-20">
                {submenus[item]?.map((subItem, i) => (
                  <div
                    key={i}
                    onClick={() => handleClick(item, subItem)}
                    className="hover:text-green-600 hover:font-semibold px-2 py-1 cursor-pointer"
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
