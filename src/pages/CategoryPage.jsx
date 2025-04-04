import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/navigations/Navigation";
import Typography from "../components/layouts/Typography";
import componentsData from "../data";

const CategoryPage = () => {
  const { category, componentName } = useParams();
  const [componentData, setComponentData] = useState(null);

  useEffect(() => {
    if (componentsData[category] && componentsData[category][componentName]) {
      setComponentData(componentsData[category][componentName]);
    }
  }, [category, componentName]);

  if (!componentData) return <p>Loading...</p>;

  return (
    <section className="mt-11 grid grid-cols-5">
      <Navigation />

      <div className="col-span-4 space-y-10 px-6 py-12">
        <header className="dark:text-lightText text-darkText space-y-2">
          <Typography variant="h1">{componentData.title}</Typography>
          <Typography
            variant="p"
            className="dark:text-lightText/80 text-darkText/80"
          >
            {componentData.description}
          </Typography>

          <div className="mt-5">
            {/* TODO: Button Preview and JSX code */}
            <Typography
              variant="p"
              className="dark:text-lightText text-darkText"
            >
              Preview | JSX
            </Typography>

            {/* TODO: Code of the actual component */}
            <pre className="rounded bg-gray-800 p-4 text-white">
              {componentData.codeSnippet}
            </pre>
          </div>
        </header>

        <div className="space-y-5">
          <Typography
            variant="h2"
            className="dark:text-lightText text-darkText"
          >
            Variants
          </Typography>
          {componentData.variants.map((variant, index) => (
            <div
              key={index}
              className="dark:text-lightText text-darkText space-y-2"
            >
              <Typography variant="h3" className="font-semibold">
                {variant.name}
              </Typography>
              <Typography
                variant="p"
                className="dark:text-lightText/80 text-darkText/80"
              >
                {variant.description}
              </Typography>

              <div>
                <Typography
                  variant="p"
                  className="dark:text-lightText text-darkText"
                >
                  Preview | JSX
                </Typography>

                <pre className="rounded bg-gray-800 p-4 text-white">
                  {variant.code}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
