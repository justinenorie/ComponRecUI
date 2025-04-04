import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import Typography from "../layouts/Typography";
import componentsData from "../../data";

const Navigation = () => {
  const categories = Object.keys(componentsData);

  const [expandedCategories, setExpandedCategories] = useState(() =>
    categories.reduce((acc, cat) => ({ ...acc, [cat]: true }), {})
  );

  const toggleCategory = (cat) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  return (
    <nav className="h-screen w-full border-r border-gray-300 p-4 text-white">
      <Typography
        variant="h2"
        className="text-lightText py-5 text-xl font-semibold"
      >
        Components
      </Typography>

      <ul className="space-y-2">
        {categories.map((data) => {
          const isExpanded = expandedCategories[data];

          return (
            <li key={data} className="mt-2">
              <div
                className="flex cursor-pointer gap-4 rounded-md px-3 py-2 hover:bg-gray-700"
                onClick={() => toggleCategory(data)}
              >
                <span
                  className={`transform transition-transform ${isExpanded ? "rotate-90" : ""}`}
                >
                  <MdArrowForwardIos />
                  {/* ▼ {">"} */}
                </span>
                <Typography variant="p" className="text-sm font-medium">
                  {data.charAt(0).toUpperCase() + data.slice(1)}
                </Typography>
              </div>

              {isExpanded && (
                <ul className="mt-1 ml-5 space-y-1">
                  {Object.keys(componentsData[data]).map((component) => (
                    <li key={component}>
                      <NavLink
                        to={`/${data}/${component}`}
                        className={({ isActive }) =>
                          `block rounded-md px-3 py-1 text-sm ${
                            isActive
                              ? "bg-blue-500 text-white"
                              : "hover:bg-gray-700"
                          }`
                        }
                      >
                        {component.charAt(0).toUpperCase() + component.slice(1)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
