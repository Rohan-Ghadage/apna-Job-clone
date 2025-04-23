import React from "react";
import { FaMapMarkerAlt, FaSuitcase, FaClock } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const jobs = [
  {
    title: "Motion Graphic Designer",
    company: "GFT Technologies",
    location: "Noida",
    salary: "Not disclosed",
    tags: ["Work from Office", "Full Time", "Min. 3 years"],
    urgent: false,
  },
  {
    title: "UI/UX Designer",
    company: "Ecom Solutions",
    location: "Nangloi, New Delhi",
    salary: "₹10,000 - ₹15,000 monthly",
    tags: ["Work from Office", "Full Time", "Min. 2 years", "Good (Intermediate / Adv.)"],
    urgent: true,
  },
  {
    title: "Change Management Graphic Designer",
    company: "Accenture India Private Limited",
    location: "Bengaluru/Bangalore",
    salary: "Not disclosed",
    tags: ["Work from Office", "Full Time", "Min. 2 years"],
  },
];

export default function JobSearchPage() {
  return (
    <div className="bg-[#f6f3fb] min-h-screen p-6 md:p-10 flex flex-col md:flex-row gap-6 justify-center">
      {/* Filters */}
      <aside className="w-full md:w-1/4 bg-white rounded-lg p-5 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        <div className="mb-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Experience</p>
          <input type="range" min="0" max="31" className="w-full accent-green-600" />
          <p className="text-sm text-right text-gray-500">Any</p>
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Date posted</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <label><input type="radio" name="date" defaultChecked /> All</label>
            <label><input type="radio" name="date" /> Last 24 hours</label>
            <label><input type="radio" name="date" /> Last 3 days</label>
            <label><input type="radio" name="date" /> Last 7 days</label>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Salary</p>
          <input type="range" min="0" max="150000" className="w-full accent-green-600" />
          <p className="text-sm text-gray-500 mt-1">₹0</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">Highest education</p>
          <div className="text-sm text-gray-700">
            <label><input type="checkbox" className="mr-2" /> 10 or Below 10th</label>
          </div>
        </div>
      </aside>

      {/* Job Listings */}
      <main className="w-full md:w-2/4">
        <h2 className="text-xl font-semibold mb-4">232 search results</h2>
        <div className="flex flex-col gap-4">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
              {job.urgent && (
                <div className="text-sm text-red-600 font-medium mb-1">🔥 Urgently hiring</div>
              )}
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-sm text-gray-700">{job.company}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <FaMapMarkerAlt /> <span>{job.location}</span>
              </div>
              <p className="text-sm text-gray-700 mt-1">{job.salary}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {job.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-md border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Sidebar Banner */}
      <aside className="hidden md:block w-1/4">
        <div className="bg-white rounded-lg p-5 shadow-md">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Login with Apna and experience more!</h3>
          <ul className="text-sm text-gray-700 mb-5 list-disc ml-5">
            <li>Personalised job matches</li>
            <li>Direct connect with HRs</li>
            <li>Latest updates on the job</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg">
            <img
              src="https://apna.co/static/images/profile-sample.png"
              alt="Profile"
              className="w-full rounded"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white text-sm w-full py-2 mt-4 rounded-md">
              Create profile &gt;
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
