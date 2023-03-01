
import { React, useState } from "react";
import FeatureSection from "../components/featureSection";
import { mainSections, principles } from "../utils/constants";
import mainImage from "../assets/images/mainImage.jpg";
import TabGroup from "../components/tabGroup";
import Tab from "../components/tab";

const Main = () => {
  const [activeTab, setActiveTab] = useState(0);

  const defineChildren = (children, index) => {
    switch (index) {
      case 1:
        return (
          <div
            className="w-50"
          >
            {children}
            <div>
              <ul>
                {principles.map((principle, index) => (
                  <li
                    key={`${index}-${principle}`}
                  >
                    <p
                      className="margin-zero"
                    >
                      {principle}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      case 2:
        return (
          <TabGroup
            active={activeTab}
            callBack={(index) => setActiveTab(index)}
          >
            <Tab
              title={"Games"}
            >
              <div>
                Hello
              </div>
            </Tab>
            <Tab
              title={"Apps"}
            >
              <div>
                Hello
              </div>
            </Tab>
          </TabGroup>
        )
      default:
        return children;
    }
  }
  return (
    <main>
      {mainSections.map((section, index) => {
        if (index === 0) {
          return (
            <div className="flex">
              <FeatureSection
                key={`${section.title}-${index}`}
                id={section.id}
                main={true}
                title={section.title}
                classes={"section-main color-white"}
                children={
                  <section>
                    {section.children}
                  </section>
                }
              />
              <img
                className="w-100 h-100 z-2"
                src={mainImage}
                alt="Welcome to G1 Core!"
                width='300'
                height='300'
              />
            </div>
          )
        }
        return <FeatureSection
          key={`${section.title}-${index}`}
          id={section.id}
          title={section.title}
          classes={index % 2 === 0 ? "section-main flex flex-column color-white"
            : `section-white flex color-main ${index === 1 ? 'flex-row flex-evenly ' : ''}`}
          children={defineChildren(section.children, index)}
        />
      })}
    </main>
  );
};

export default Main;