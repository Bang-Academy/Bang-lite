import React from "react";
import "./EstilosCartas.css";
import Carmel1 from "./Assets/Cartas/Carmel1.png";
import Carmel2 from "./Assets/Cartas/Carmel2.png";
import Carmel3 from "./Assets/Cartas/Carmel3.png";
import Carmel4 from "./Assets/Cartas/Carmel4.png";
import Carmel5 from "./Assets/Cartas/Carmel5.png";
import Carmel6 from "./Assets/Cartas/Carmel6.png";
import Carmel7 from "./Assets/Cartas/Carmel7.png";
import Carmel8 from "./Assets/Cartas/Carmel8.png";
import Carmel9 from "./Assets/Cartas/Carmel9.png";
import Carmel10 from "./Assets/Cartas/Carmel10.png";
import Cori1 from "./Assets/Cartas/Cori1.png";
import Cori2 from "./Assets/Cartas/Cori2.png";
import Cori3 from "./Assets/Cartas/Cori3.png";
import Cori4 from "./Assets/Cartas/Cori4.png";
import Cori5 from "./Assets/Cartas/Cori5.png";
import Cori6 from "./Assets/Cartas/Cori6.png";
import Cori7 from "./Assets/Cartas/Cori7.png";
import Cori8 from "./Assets/Cartas/Cori8.png";
import Cori9 from "./Assets/Cartas/Cori9.png";
import Cori10 from "./Assets/Cartas/Cesia10.png";
import Cesia1 from "./Assets/Cartas/Cesia1.png";
import Cesia2 from "./Assets/Cartas/Cesia2.png";
import Cesia3 from "./Assets/Cartas/Cesia3.png";
import Cesia4 from "./Assets/Cartas/Cesia4.png";
import Cesia5 from "./Assets/Cartas/Cesia5.png";
import Cesia6 from "./Assets/Cartas/Cesia6.png";
import Cesia7 from "./Assets/Cartas/Cesia7.png";
import Cesia8 from "./Assets/Cartas/Cesia8.png";
import Cesia9 from "./Assets/Cartas/Cesia9.png";
import Cesia10 from "./Assets/Cartas/Cesia10.png";
import Crispi1 from "./Assets/Cartas/Crispi1.png";
import Crispi2 from "./Assets/Cartas/Crispi2.png";
import Crispi3 from "./Assets/Cartas/Crispi3.png";
import Crispi4 from "./Assets/Cartas/Crispi4.png";
import Crispi5 from "./Assets/Cartas/Crispi5.png";
import Crispi6 from "./Assets/Cartas/Crispi6.png";
import Crispi7 from "./Assets/Cartas/Crispi7.png";
import Crispi8 from "./Assets/Cartas/Crispi8.png";
import Crispi9 from "./Assets/Cartas/Crispi9.png";
import Crispi10 from "./Assets/Cartas/Crispi10.png";
import Cristal1 from "./Assets/Cartas/Cristal1.png";
import Cristal2 from "./Assets/Cartas/Cristal2.png";
import Cristal3 from "./Assets/Cartas/Cristal3.png";
import Cristal4 from "./Assets/Cartas/Cristal4.png";
import Cristal5 from "./Assets/Cartas/Cristal5.png";
import Cristal6 from "./Assets/Cartas/Cristal6.png";
import Cristal7 from "./Assets/Cartas/Cristal7.png";
import Cristal8 from "./Assets/Cartas/Cristal8.png";
import Cristal9 from "./Assets/Cartas/Cristal9.png";
import Cristal10 from "./Assets/Cartas/Cristal10.png";

import RespaldoCarmel from "./Assets/Cartas/RespaldoCarmel.png";

const cards = () => {
  const images = [
    Carmel1,
    Carmel2,
    Carmel3,
    Carmel4,
    Carmel5,
    Carmel6,
    Carmel7,
    Carmel8,
    Carmel9,
    Carmel10,
    Cesia1,
    Cesia2,
    Cesia3,
    Cesia4,
    Cesia5,
    Cesia6,
    Cesia7,
    Cesia8,
    Cesia9,
    Cesia10,
    Cori1,
    Cori2,
    Cori3,
    Cori4,
    Cori5,
    Cori6,
    Cori7,
    Cori8,
    Cori9,
    Cori10,
    Crispi1,
    Crispi2,
    Crispi3,
    Crispi4,
    Crispi5,
    Crispi6,
    Crispi7,
    Crispi8,
    Crispi9,
    Crispi10,
    Cristal1,
    Cristal2,
    Cristal3,
    Cristal4,
    Cristal5,
    Cristal6,
    Cristal7,
    Cristal8,
    Cristal9,
    Cristal10,
  ];
  let randomImg = images[Math.floor(Math.random() * images.length)];

  function get_random_image() {
    let random_index = Math.floor(Math.random() * images.length);
    let selected_image = images[random_index];
    // document.getElementById("image_shower").src = images[0];
    randomImg = selected_image;
    document.getElementById("image_shower").src = randomImg;
  }

  return (
    <section className="fondo">
      <div className="absolute invisible xl:visible sm:top-72 sm:left-40"></div>
      <div className="grid place-items-center min-h-screen">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={RespaldoCarmel}
                alt="Yo soy Carmel, no dudes en buscarme si necesitas algo"
                className="h-[450px] sm:h-[450px]"
              />
            </div>
            <div className="flip-card-back">
              {/* <img src={randomImg} className="h-[450px] sm:h-[450px]" /> */}
              <img
                src={randomImg}
                id="image_shower"
                className="h-[450px] sm:h-[450px]"
              />
              <br />
              <button
                onClick={get_random_image}
                className="border border-white text-white  py-1.5 px-2 rounded-full inline-flex items-center"
              >
                <a className="font-['Montserrat'] border-none rounded-full py-1.5 px-8 font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500">
                  Inspirate más
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cards;
