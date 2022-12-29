import Data from "./Data.js";
let Css = document.getElementById("Css");
let Js = document.getElementById("Js");
let LeftSide = document.querySelector("#LeftSide ul");
let DivContent = document.querySelector("#Content");
LeftSide.innerHTML = ``;
for (let i = 0; i < Data.length; i++) {
  LeftSide.innerHTML += `<li data-search="${Data[i].Property}">${Data[i].Property}</li>`;
}
let Btns = LeftSide.querySelectorAll("[data-search]");
let SearchResult = Data.filter((Item) => Item.Property === "Margin");
DivContent.innerHTML = `
  <h1 data-frame="h2" class="BorderBottom-2-solid-#fff">${SearchResult[0].Property}</h1>
`;
for (let i = 0; i < SearchResult[0].Content.length; i++) {
  DivContent.innerHTML += `
    <div class="Property">
      <h2>${i + 1}-${SearchResult[0].Content[i].Title}</h2>
      <p>${SearchResult[0].Content[i].Content}</p>
    </div>
`;
}
Btns.forEach((El) => {
  El.addEventListener("click", () => {
    let SearchResult = Data.filter(
      (Item) => Item.Property === El.dataset.search
    );
    DivContent.innerHTML = `
      <h1 data-frame="h2" class="BorderBottom-2-solid-#fff">${SearchResult[0].Property}</h1>
    `;
    for (let i = 0; i < SearchResult[0].Content.length; i++) {
      DivContent.innerHTML += `
        <div class="Property">
          <h2>${i + 1}-${SearchResult[0].Content[i].Title}</h2>
          <p>${SearchResult[0].Content[i].Content}</p>
        </div>
    `;
    }
  });
});

Css.innerHTML = `<p>${
  location.protocol +
  "//" +
  location.host +
  location.pathname +
  "Make_It_Easier/css/Make_It_Easier.css"
}</p>`;
Js.innerHTML = `<p>${
  location.protocol +
  "//" +
  location.host +
  location.pathname +
  "Make_It_Easier/js/Make_It_Easier.js"
}</p>
<p data-frame="p" class="MarginTop-10">
${
  location.protocol +
  "//" +
  location.host +
  location.pathname +
  "Make_It_Easier/js/analysis.js"
}</p>`;
