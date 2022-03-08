const authors = [
  {
    id: "1",
    name: "Can",
    surname: "Polat",
  },
  {
    id: "2",
    name: "Armagan",
    surname: "Dalkiran",
  },
];

const books = [
  {
    id: "1",
    title: "Marvel Comic",
    author:authors[0],
    price: 20,
    author_id:"1"
  },
  {
    id: "2",
    title: "DC Comic",
    author:authors[1],
    price: 25,
    author_id:"2"
  },
  
];

module.exports = {
  authors,
  books,
};
