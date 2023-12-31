const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listContainerEl = document.querySelector(".gallery");
listContainerEl.style.display = "flex";
listContainerEl.style.gap = "20px";
listContainerEl.style.justifyContent = "center";

const imageGaleryMarkup = images
  .map(
    ({ url, alt }) =>
      `<li style="list-style: none; width: 440px; padding: 20px; background-color: #eee;"><img src="${url}" alt="${alt}" width="400"></li>`
  )
  .join("");


// Добавляємо в <ul>
listContainerEl.insertAdjacentHTML("afterbegin", imageGaleryMarkup);
