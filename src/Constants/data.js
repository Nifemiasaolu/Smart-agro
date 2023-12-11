import images from "./images";

const menus = [
  {
    title: "Home",
    id: "#home",
  },
  {
    title: "About",
    id: "#about",
  },
  {
    title: "Products",
    id: "#product",
  },
  {
    title: "Projects",
    id: "#project",
  },
  {
    title: "Services",
    id: "#services",
  },
  {
    title: "News",
    id: "#news",
  },
  {
    title: "Contact",
    id: "#contact",
  },
];

const organic = [
  {
    text: "Organic food contains more vitamins",
    id: 0,
  },
  {
    text: "Eat organic because supply meets demand",
    id: 1,
  },
  {
    text: "Organic food is never irradiated",
    id: 2,
  },
];

const figmaImg = [
  {
    imgUrl: images.figma,
    id: 0,
  },
  {
    imgUrl: images.figma,
    id: 1,
  },
  {
    imgUrl: images.figma,
    id: 2,
  },
  {
    imgUrl: images.figma,
    id: 3,
  },
  {
    imgUrl: images.figma,
    id: 4,
  },
  {
    imgUrl: images.figma,
    id: 5,
  },
];

const links = [
  {
    title: "New Projects",
    id: 0,
  },
  {
    title: "Our Services",
    id: 1,
  },
  {
    title: "Testimonials",
    id: 2,
  },
  {
    title: "About Us",
    id: 3,
  },

  {
    title: "Contact Us",
    id: 4,
  },
];

const projects = [
  {
    imgUrl: images.project1,
    id: 0,
  },
  {
    imgUrl: images.project2,
    id: 1,
  },
  {
    imgUrl: images.project3,
    id: 2,
  },
  {
    imgUrl: images.project4,
    id: 3,
  },
];

const articles = [
  {
    imgUrl: images.article1,
    name: "Kelvin Martin",
    NumComments: "2",
    text: "Taking seamless key indicators offline",
    id: 0,
  },
  {
    imgUrl: images.article2,
    name: "Kelvin Martin",
    NumComments: "3",
    text: "Override the digital divide with additional",
    id: 1,
  },
  {
    imgUrl: images.article3,
    name: "Kelvin Martin",
    NumComments: "1",
    text: "Agriculture Matters to the Future of next",
    id: 2,
  },
];

const vegetables = [
  {
    imageUrl: images.apple,
    name: "Apple",
    id: 0,
  },

  {
    imageUrl: images.blueberry,
    name: "Blueberry",
    id: 1,
  },

  {
    imageUrl: images.strawberry,
    name: "Strawberry",
    id: 2,
  },

  {
    imageUrl: images.eggplant,
    name: "Eggplant",
    id: 3,
  },

  {
    imageUrl: images.cabbage,
    name: "Cabbage",
    id: 4,
  },

  {
    imageUrl: images.carrot,
    name: "Carrot",
    id: 5,
  },
];

const services = [
  {
    imgUrl: images.growth,
    title: "Our Agriculture Growth",
    text: "Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor",
    id: 0,
  },

  {
    imgUrl: images.productVegetable,
    title: "Making Healthy Foods",
    text: "Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor interdum scelerisque",
    id: 1,
  },
];

//eslint-disable-next-line
export default {
  menus,
  organic,
  figmaImg,
  links,
  projects,
  articles,
  vegetables,
  services
};
