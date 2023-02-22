const cardObjectDefinitions = [
  { id: 1, imagePath: "/img/card-1.png" },
  { id: 2, imagePath: "/img/card-2.png" },
  { id: 3, imagePath: "/img/card-3.png" },
  { id: 4, imagePath: "/img/card-4.png" },
];

// <!--
// <div class="card">
//     <div class="card-inner">
//         <div class="card-front">
//             <img src="./img//card-4.png" alt="" class="card-img">
//         </div>
//         <div class="card-back">
//             <img src="./img//card-5.png" alt="" class="card-img">
//         </div>
//     </div>
// </div> -->
const cardBackImgPath = "/img/card-5.png";
const cardContainerElem = document.querySelector(".card-container");

createCards();

function createCards() {
  cardObjectDefinitions.forEach((cardItem) => {
    createCard(cardItem);
  });
}

function createCard(cardItem) {
  const cardElem = createElement("div");
  const cardInnerElem = createElement("div");
  const cardFrontElem = createElement("div");
  const cardBackElem = createElement("div");
  const cardFrontImg = createElement("img");
  const cardBackImg = createElement("img");

  addClassToElement(cardElem, "card");
  addIdToElement(cardElem, cardItem.id);
  addClassToElement(cardInnerElem, "card-inner");
  addClassToElement(cardFrontElem, "card-front");
  addClassToElement(cardBackElem, "card-back");
  addSrcToImageElem(cardBackImg, cardBackImgPath);
  addSrcToImageElem(cardFrontImg, cardItem.imagePath);
  addClassToElement(cardBackImg, "card-img");
  addClassToElement(cardFrontImg, "card-img");
  addChildElement(cardFrontElem, cardFrontImg);
  addChildElement(cardBackElem, cardBackImg);
  addChildElement(cardInnerElem, cardFrontElem);
  addChildElement(cardInnerElem, cardBackElem);
  addChildElement(cardElem, cardInnerElem);

  addCardToGridCell(cardElem);
}
d;
function createElement(elemType) {
  return document.createElement(elemType);
}
function addClassToElement(elem, className) {
  elem.classList.add(className);
}
function addIdToElement(elem, id) {
  elem.id = id;
}
function addSrcToImageElem(imgElem, src) {
  imgElem.src = src;
}
function addChildElement(parentElem, childElem) {
  parentElem.appendChild(childElem);
}

function addCardToGridCell(card) {
  const cardPositionClassName = mapCardIdToGridCell(card);
  const cardPosElem = document.querySelector(cardPositionClassName);
  addChildElement(cardPosElem, card);
}
function mapCardIdToGridCell(card) {
  if (card.id == 1) {
    return ".card-plc-a";
  } else if (card.id == 2) {
    return ".card-plc-b";
  } else if (card.id == 3) {
    return ".card-plc-c";
  } else if (card.id == 4) {
    return ".card-plc-d";
  }
}
