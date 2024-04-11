const renderListProducts = (listsProducts) => {
  const sliderCards = document.getElementById("product-template");

  const productSlider = document.getElementById("product-slider");

  listsProducts.forEach((n) => {
    const sliderCardsClone = sliderCards.content.cloneNode(true);
    console.log(sliderCardsClone);

    sliderCardsClone.querySelector(".product-price").innerText = n.price;
    sliderCardsClone.querySelector("img").src = n.images;
    sliderCardsClone.querySelector(".product-content").innerText = n.content;
    productSlider.appendChild(sliderCardsClone);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    autoplay: false,
    gap: 20,
    focusAt: "center",
    perView: 5,
    breakpoints: {
      800: {
        perView: 1,
        gap: 5,
      },
    },
  }).mount();
});
const listProductsTests = [
  { id: 0, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 1, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 2, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 3, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 4, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 5, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 6, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 7, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 8, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 9, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 10, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 11, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 12, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 13, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 14, price: "20$", content: "product content", images: "/img/1.png" },
  { id: 15, price: "20$", content: "product content", images: "/img/1.png" },
];
renderListProducts(listProductsTests);
