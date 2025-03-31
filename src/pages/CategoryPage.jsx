import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/navigations/Navigation";
import Typography from "../components/layouts/Typography";
import componentsData from "../data";

const ActionPage = () => {
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

      <div className="col-span-4 px-6 py-12">
        <header>
          <Typography variant="h1">{componentData.title}</Typography>
          <Typography variant="p">{componentData.description}</Typography>
        </header>

        <div>
          <h2 className="text-lg font-bold">Code Snippet:</h2>
          <pre className="rounded bg-gray-800 p-4 text-white">
            {componentData.codeSnippet}
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-bold">Variants:</h2>
          {componentData.variants.map((variant, index) => (
            <div key={index} className="mt-4">
              <Typography variant="h2">{variant.name}</Typography>
              <Typography variant="p">{variant.description}</Typography>
              <pre className="rounded bg-gray-800 p-4 text-white">
                {variant.code}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionPage;
