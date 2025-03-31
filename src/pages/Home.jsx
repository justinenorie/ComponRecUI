import { Link } from "react-router-dom";
import Typography from "../components/layouts/Typography";

const Home = () => {
  // TODO: Replace this data with the actual existing category based on the components/index.js
  const componentData = [
    {
      componentName: "Action",
      description:
        "Lorem ipsum dolor sit amet, contetur. Nunc vel metus blandit, fermentum lectus sed, ultricies ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      navigateTo: "/actions/button",
      img: "",
    },
    {
      componentName: "Navigation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae metus vel nisl imperdiet consectetur. Nunc vel metus blandit, fermentum lectus sed, ultricies ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      navigateTo: "/action/modal",
    },
    {
      componentName: "Card",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae metus vel nisl imperdiet consectetur. Nunc vel metus blandit, fermentum lectus sed, ultricies ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      navigateTo: "/action/switch",
    },
    {
      componentName: "Card",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae metus vel nisl imperdiet consectetur. Nunc vel metus blandit, fermentum lectus sed, ultricies ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      navigateTo: "/action",
    },
    {
      componentName: "Card",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae metus vel nisl imperdiet consectetur. Nunc vel metus blandit, fermentum lectus sed, ultricies ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      navigateTo: "/action",
    },
    {
      componentName: "Card",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae metus vel nisl imperdiet consectetur. Nunc vel metus blandit, fermentum lectus sed, ultricies ante. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      navigateTo: "/action",
    },
  ];

  return (
    <section>
      <div className="border-accentDark dark:text-lightText text-darkText h-auto w-full border-1 py-10">
        <Typography variant="h1" className="mt-15 text-center">
          What is{" "}
          <strong className="dark:text-primaryDark text-primaryLight">
            ComponRecUI?
          </strong>
        </Typography>
        <Typography variant="p" className="my-2 text-center">
          Every collection of ComponRecUI components so far that is made with
          React and TailwindCSS only.
        </Typography>
      </div>

      <div className="dark:text-lightText text-darkText dark:border-accentDark/70 border-accentLight/70 border-x-1">
        <Typography variant="h2" className="py-2">
          All ComponRecUI Components
        </Typography>
        <Typography variant="p" className="py-2">
          99 Components
        </Typography>
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {componentData.map((data, index) => (
            <Link
              to={data.navigateTo}
              key={index}
              className="hover:dark:shadow-accentDark hover:shadow-accentLight hover:dark:ring-accentDark hover:ring-accentLight overflow-hidden rounded-md bg-clip-padding ring-2 transition duration-300 hover:shadow-[0_0_40px_0_rgba(0,0,0,0.1)]"
            >
              <div className="grid">
                <img
                  src="/sample.png" // TODO: Replace this with the actual png of the skeleton component
                  alt={data.componentName}
                  className="h-auto w-full"
                />
                <div className="p-5">
                  <Typography variant="p" className="mb-2 font-medium">
                    {data.componentName}
                  </Typography>
                  <Typography
                    variant="small"
                    className="dark:text-lightText/80 text-darkText/80"
                  >
                    {data.description}
                  </Typography>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer>
        {/* TODO: Add a Footer Style here it must be in the layouts component */}
      </footer>
    </section>
  );
};

export default Home;
