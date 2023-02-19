
import { React, } from "react";
import FeatureSection from "../components/featureSection";
import { mainSections } from "../utils/constants";

const Main = () => {

  return (
    <main>
      {mainSections.map((section, index) => {
        if (index === 0) {
          return <FeatureSection
            key={`${section.title}-${index}`}
            title={section.title}
            classes={"section-main color-white flex flex-row"}
            children={section.children}
          />
        }
        return <FeatureSection
          key={`${section.title}-${index}`}
          title={section.title}
          classes={index % 2 === 0 ? "section-main color-white" : "section-white color-main"}
          children={section.children}
        />
      })}
    </main>
  );
};

export default Main;