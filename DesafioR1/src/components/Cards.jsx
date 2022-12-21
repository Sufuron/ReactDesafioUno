import Card from "./Card";

import image1 from "../assets/img/card1.jpg";
import image2 from "../assets/img/card2.jpg";
import image3 from "../assets/img/card3.jpg";
import image4 from "../assets/img/card4.jpg";
import image5 from "../assets/img/card5.jpg";
import image6 from "../assets/img/card6.jpg";

const cards = [
  {
    id: 1,
    title: "Pajaron mestizo",
    image: image1,
    description:
      "Lorem ipsum dolor sit amet adipisicing elit Laudantium unde labore perferendis iure facere facilis nostrum quaerat id eiu",
    url: "https://pixabay.com/es/photos/robin-p%c3%a1jaro-fauna-silvestre-animal-662134/",
  },
  {
    id: 2,
    title: "LosTres",
    image: image2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquid ratione voluptates voluptatem optio atque",
    url: "https://pixabay.com/es/photos/monigote-de-nieve-invierno-nieve-6981771/",
  },
  {
    id: 3,
    title: "Pajaron blanco",
    image: image3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio blanditiis obcaecati delectus cum voluptates error",
    url: "https://pixabay.com/es/photos/p%c3%a1jaro-pico-plumas-plumaje-aviar-7653386/",
  },
  {
    id: 4,
    title: "Perron",
    image: image4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Recusandae repellendus sequi vel asperiores aliquam ea",
    url: "https://pixabay.com/es/photos/perro-mascota-americano-esquimal-7651002/",
  },
  {
    id: 5,
    title: "Cisnon",
    image: image5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit perspiciatis soluta repellendus quasi aperiam cupiditate",
    url: "https://pixabay.com/es/photos/p%c3%a1jaro-cisne-ornitolog%c3%ada-especies-7655137/",
  },
  {
    id: 6,
    title: "Mariposon",
    image: image6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Amet rem dicta aut consequuntur optio beatae",
    url: "https://pixabay.com/es/photos/insecto-mariposa-alas-mano-fauna-7310563/",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card
              title={card.title}
              imageSource={card.image}
              description={card.description}
              url={card.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
