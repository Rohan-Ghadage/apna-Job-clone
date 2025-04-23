import { Link } from "react-router-dom";

const careerLinks = [
  {
    icon: "📄",
    title: "AI Resume builder",
    desc: "Create your best resume using AI",
    link: "/career/resume-builder",
  },
  {
    icon: "🧠",
    title: "AI Resume checker",
    desc: "Get instant resume feedback",
    link: "/career/resume-checker",
  },
  {
    icon: "✉️",
    title: "AI Cover letter generator",
    desc: "Stand out and get hired faster",
    link: "/career/cover-letter",
  },
  {
    icon: "🎤",
    title: "AI Interview",
    desc: "Your strategy to success",
    link: "/career/interview",
    comingSoon: true,
  },
  {
    icon: "📝",
    title: "Blog",
    desc: "Guidance for securing your dream job",
    link: "/career/blog",
  },
];

export default function CareerDropdown() {
  return (
    <div className="absolute top-full left-0 mt-2 flex w-[600px] rounded-xl bg-white shadow-lg z-50">
      <div className="w-2/3 p-4">
        {careerLinks.map((item, idx) => (
          <Link
            to={item.link}
            key={idx}
            className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="text-xl">{item.icon}</div>
            <div>
              <div className="font-medium group-hover:font-bold group-hover:text-green-600">
                {item.title}
                {item.comingSoon && (
                  <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                    Coming soon
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-500">{item.desc}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Right Side Video Section */}
      <div className="w-1/3 p-4 border-l">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/assets/react.svg"
            alt="Career video"
            className="w-full rounded-lg"
          />
        </div>
        <div className="mt-2 text-sm font-medium">
          Level up your resume: Watch our career compass video guide.
        </div>
        <Link
          to="/career/video"
          className="text-green-600 text-sm font-semibold mt-1 inline-block"
        >
          Watch video →
        </Link>
      </div>
    </div>
  );
}
