import Typography from "../layouts/Typography";
import { useTheme } from "../../hooks/useTheme";
import { Link } from "react-router-dom";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    /* 
      TODO: Add Navigations such as Home, Search Bar (Ctrl + K).
      TODO: Add the side bar navigation (maybe it is another component).
      TODO: Add the hamburger Menu for responsiveness.
    */
    <section className="bg-opacity-0 dark:bg-darkBg/40 bg-lightBg/40 dark:border-accentDark/70 border-accentLight/70 fixed top-0 right-0 left-0 z-50 w-full border-b-2 bg-clip-padding backdrop-blur-sm backdrop-filter">
      <div className="flex items-center justify-between">
        <Link to="/">
          <Typography
            variant="h3"
            className="dark:text-lightText text-darkText"
          >
            ComponRecUI
          </Typography>
        </Link>

        <button onClick={toggleTheme} className="rounded bg-gray-600 p-2">
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </section>
  );
};

export default TopBar;
