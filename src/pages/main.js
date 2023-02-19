
import { React, useContext, useState, useEffect } from "react";
import FeatureCard from "../components/featureCard";
import { store } from "../store/store";
import imageOne from "../assets/images/FeatureImg1.png";
import imageTwo from "../assets/images/FeatureImg2.png";
import imageThree from "../assets/images/FeatureImg3.png";
import mainImage from "../assets/images/MainImage.svg";
import { titleParser } from "../components/featureCard";
import { titleChanger } from "../utils/utils";
import EventTypes from "../store/eventTypes";
import "../assets/styles/main.scss";

const Main = () => {
    const { state, dispatch } = useContext(store);
    const { locales, selectedLanguage, isMobile } = state;
    const [array, setArray] = useState([]);

    useEffect(() => {
        dispatch({type: EventTypes.SET_NAVBAR,
          payload: "main" });
        titleChanger("Fotograf blisko Ciebie. Sesja zdjęciowa w Polsce",
          "Sprawdź oferty fotografów i porównaj ceny.");
    },[]);


    return (
      <>
        <div 
          style={ { background: "var(--black)" } }>
          <main className='main padding'>
            <div className="flex flex-between" >
              <h1>
                {titleParser(locales[selectedLanguage].main_title)}
              </h1>
              <img
                src={ mainImage }
                alt='Welcome to the MMNT'
                width={ !isMobile ? "625px" : "100%" }
              />
            </div>
          </main>
          {array.map((object, index) => {
              return (
                <FeatureCard
                  key={ `${index} ${object.title}` }
                  title={ object.title }
                  text={ object.text }
                  image={ object.image }
                  flexDirection={ !isMobile ?
                    index === 0 || index === 2
                      ? "row-reverse"
                      : "row"
                    :""
                  }
                  background={
                    index === 0 || index === 2
                      ? "var(--main-back-color1)"
                      : "var(--main-back-color2)"
                  }
                  isMobile={ isMobile }
                />);
          }
          )}
        </div>
      </>
    );
};

export default Main;