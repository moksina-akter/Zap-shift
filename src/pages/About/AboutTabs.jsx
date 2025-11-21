import { Link, Outlet, useLocation } from "react-router";

const AboutTabs = () => {
  const { pathname } = useLocation();

  const tabs = [
    { name: "Story", path: "/about-us" },
    { name: "Mission", path: "/about-us/mission" },
    { name: "Success", path: "/about-us/success" },
    { name: "Team & Others", path: "/about-us/team" },
  ];

  return (
    <div className="">
      <div className="flex gap-6 border-b pb-2 text-gray-600 font-medium">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`cursor-pointer pb-2 ${
              pathname === tab.path
                ? "text-green-700 border-b-2 border-green-700"
                : "hover:text-green-700"
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AboutTabs;
