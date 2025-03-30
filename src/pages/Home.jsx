import Typography from "../components/layouts/Typography";
import { useTheme } from "../hooks/useTheme";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  const componentData = [
    {
      componentName: "Action",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae metus vel nisl imperdiet consectetur. Nunc vel metus blandit, fermentum lectus sed, ultricies ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      componentName: "Navigation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae metus vel nisl imperdiet consectetur. Nunc vel metus blandit, fermentum lectus sed, ultricies ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      componentName: "Card",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae metus vel nisl imperdiet consectetur. Nunc vel metus blandit, fermentum lectus sed, ultricies ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      componentName: "Card",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae metus vel nisl imperdiet consectetur. Nunc vel metus blandit, fermentum lectus sed, ultricies ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      componentName: "Card",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae metus vel nisl imperdiet consectetur. Nunc vel metus blandit, fermentum lectus sed, ultricies ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      componentName: "Card",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae metus vel nisl imperdiet consectetur. Nunc vel metus blandit, fermentum lectus sed, ultricies ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
  ];

  return (
    <section>
      {/* TODO: Replace the topbar with the component this is temporary topbar */}
      <section className="bg-opacity-0 dark:bg-darkBg/40 bg-lightBg/40 dark:border-accentDark/70 border-accentLight/70 fixed top-0 right-0 left-0 z-50 w-full border-b-2 bg-clip-padding backdrop-blur-sm backdrop-filter">
        <div className="flex items-center justify-between">
          <Typography
            variant="h3"
            className="dark:text-lightText text-darkText"
          >
            ComponRecUI
          </Typography>

          <button onClick={toggleTheme} className="rounded bg-gray-600 p-2">
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </section>

      <div className="border-accentDark dark:text-lightText text-darkText h-auto w-full border-1 py-10">
        <Typography variant="h1" className="mt-15 text-center">
          What is{" "}
          <strong className="dark:text-primaryDark text-primaryLight">
            ComponRecUI?
          </strong>
        </Typography>
        <Typography variant="p" className="my-2 text-center">
          Every collection of components so far that is made with React and
          TailwindCSS only.
        </Typography>
      </div>

      <div className="dark:text-lightText text-darkText dark:border-accentDark/70 border-accentLight/70 border-x-1">
        <Typography variant="p" className="">
          All ComponRecUI Components
        </Typography>
        <Typography variant="p" className="py-2">
          99 Components
        </Typography>
        <div className="grid grid-cols-3 gap-x-6 gap-y-12">
          {componentData.map((data, index) => (
            <a
              href="/"
              key={index}
              className="hover:shadow-accentLight dark:border-lightText/50 border-darkText/50 overflow-hidden rounded-md border-2 bg-clip-padding ring-1 transition duration-300 hover:shadow-lg"
            >
              <img
                src="/sample-collection.webp"
                alt={data.componentName}
                className="h-auto w-full"
              />
              <div className="p-5">
                <Typography variant="p">{data.componentName}</Typography>
                <Typography
                  variant="small"
                  className="dark:text-lightText/80 text-darkText/80"
                >
                  {data.description}
                </Typography>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
