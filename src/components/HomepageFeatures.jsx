import React from "react";
import Link from "@docusaurus/Link";
import useGlobalData from "@docusaurus/useGlobalData";

export default function HomepageFeatures() {
  const globalData = useGlobalData();
  const categories = globalData["docs-metadata-plugin"]?.default || [];

  return (
    <section className="">
      <div className="container">
        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className="card group hover:dark:border-accentDark hover:border-accentLight dark:border-lightText/80 border-darkText/40 relative overflow-hidden border-1 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Link to={item.link} className="absolute inset-0 z-10" />
              <div className="card__header">
                <h2>{item.title}</h2>
              </div>
              <div className="card__body">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
