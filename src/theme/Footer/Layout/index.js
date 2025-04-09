import React from "react";
import clsx from "clsx";
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div className="container-fluid container">
        <div className="row">
          <div className="col col--4">
            <div className="flex">
              {logo && <div className="m-0">{logo}</div>}
              <h2 className="flex items-center" style={{ margin: 0 }}>
                ComponRecUI
              </h2>
            </div>
            <p className="pt-2 text-gray-300">
              Every collection of ComponRecUI components so far that is made
              with React and TailwindCSS only.
            </p>
          </div>
          <div className="col col--8">{links}</div>
        </div>

        <div className="mt-4 text-center">{copyright}</div>
      </div>
    </footer>
  );
}
