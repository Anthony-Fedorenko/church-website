import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "../styles/About.scss";

const images = [
  { src: "/src/assets/images/church1.jpg", alt: "Фасад храма" },
  { src: "/src/assets/images/church2.jpg", alt: "Интерьер" },
  { src: "/src/assets/images/church3.jpg", alt: "Проскомидия" },
  { src: "/src/assets/images/church4.jpg", alt: "Строительство" },
];

export default function About() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="about container">
      <h1>O Świątyni</h1>

      <p>
        Parafię erygowano 22 maja 2006 roku. To śp. arcybiskup Jeremiasz
        (Anchimiuk) nadał jej to „imię”, a 28.09.2011 r. wmurował kamień
        węgielny pod budowę cerkwi. Od pierwszych chwil Matka Boża pokrywa swym
        omoforionem słubicką parafię. Wszystko dzieje się tu z Bożą pomocą, w
        atmosferze miłości. Przez prawie 10 lat nabożeństwa odbywały się w
        prywatnym mieszkaniu. W środę czytano akatyst do Matki Bożej.
        W niedzielę sprawowana była liturgia, na którą przychodziło początkowo kilka – kilkanaście osób. Ale wiara czyni cuda.
      </p>

      <p>
        Projekt cerkwi nawiązujący do XI w. cerkwi Opieki Matki Bożej na Nerli zbudowanej przez św. kniazia Andrzeja Bogolubskiego, zrealizowano w Krzemieńcu na Ukrainie w latach 90 XX w., po 1000 latach został adoptowany przez polskich architektów na zachodnich rubieżach Polski. Dużą działkę budowlaną położoną w centrum miasta życzliwie przekazały parafii władze miasta. Cerkiew zbudowano dzięki modlitwom i ofiarom mnichów z Atosu, wiernych ze Słubic i Frankfurtu nad Odrą oraz wielu anonimowym darczyńcom z całej Polski.
      </p>

      <div className="gallery">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {index >= 0 && (
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={images}
          plugins={[Thumbnails]}
        />
      )}
    </section>
  );
}
