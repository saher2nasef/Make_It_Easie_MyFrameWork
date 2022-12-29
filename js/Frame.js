import analysis from "./analysis.js";
let ClassAnalysis = new analysis();
// Start
let arrayAllElements = [];
let index = -1;
// To Create Style
const styleEl = document.createElement("style");
styleEl.id = "StyleCssFrameWork";
document.head.appendChild(styleEl);
// End

var observer = new MutationObserver((event) => {
  for (let i = 0; i < event.length; i++) {
    let ClassName = event[i].target.className.replaceAll("\n", "").split(" ");
    let Id = event[i].target.dataset.id;
    let properties = ClassAnalysis.analysis(ClassName);
    for (let x = 0; x < arrayAllElements.length; x++) {
      if (arrayAllElements[x].selector.includes(Id)) {
        arrayAllElements[x].properties = [];
        arrayAllElements[x].selector = `[data-id="${Id}"]`;
        for (let p = 0; p < properties.length; p++) {
          arrayAllElements[x].properties.push(properties[p]);
        }
      }
    }
  }
  InnerHtmlStyleTag(arrayAllElements);
});
var observer2 = new MutationObserver((event) => {
  let arrayEls = [];
  for (let i = 0; i < event.length; i++) {
    arrayEls.push(event[i].target);
  }
  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  let arrayEl = removeDuplicates(arrayEls);
  let allElementToMakeChangesOther = "";
  for (let x = 0; x < arrayEl.length; x++) {
    if (arrayEl[x].children.length > 0) {
      // elements Have A class
      allElementToMakeChangesOther =
        arrayEl[x].querySelectorAll("[data-frame]");
      allElementToMakeChangesOther.forEach((element) => {
        // Add id to the Element
        let randomkey = [...Array(14)]
          .map(() => Math.random().toString(26)[2])
          .join("");
        element.dataset.id = randomkey;
        // End
        // ClassName
        let array = element.className.replaceAll("\n", "").split(" ");
        // end
        // Start Make Array Have selector And properties
        arrayAllElements.push({
          selector: `[data-id="${randomkey}"]`,
          properties: [],
        });
        index++;
        let properties = ClassAnalysis.analysis(array);
        for (let i = 0; i < properties.length; i++) {
          arrayAllElements[index].properties.push(properties[i]);
        }
      });
      InnerHtmlStyleTag(arrayAllElements);
    }
  }
});

styleEl.innerHTML = "";
// elements Have A class
let allElementToMakeChangesOther = document.querySelectorAll("[data-frame]");
// forEach To analysis the classes
allElementToMakeChangesOther.forEach((element) => {
  // Add id to the Element
  let randomkey = [...Array(14)]
    .map(() => Math.random().toString(26)[2])
    .join("");
  element.dataset.id = randomkey;
  // End
  // ClassName
  let array = element.className.replaceAll("\n", "").split(" ");
  // end
  // Start Make Array Have selector And properties
  arrayAllElements.push({
    selector: `[data-id="${randomkey}"]`,
    properties: [],
  });
  index++;
  let properties = ClassAnalysis.analysis(array);
  for (let i = 0; i < properties.length; i++) {
    arrayAllElements[index].properties.push(properties[i]);
  }
  observer.observe(element, {
    attributes: true,
    attributeFilter: ["class"],
    childList: false,
    characterData: false,
  });
  observer2.observe(element, {
    attributes: false,
    childList: true,
    characterData: true,
  });
});

function InnerHtmlStyleTag(arrayAllElements) {
  styleEl.innerHTML = "";
  let AllItems = arrayAllElements;
  let ArrayToFullInnerHTMlToStyle = [];
  for (let i = 0; i < AllItems.length; i++) {
    ArrayToFullInnerHTMlToStyle.push(AllItems[i].selector + "{ ");
    for (let x = 0; x < AllItems[i].properties.length; x++) {
      ArrayToFullInnerHTMlToStyle[i] += AllItems[i].properties[x];
    }
    ArrayToFullInnerHTMlToStyle[i] += "} \n";
  }
  styleEl.innerHTML = "";
  for (let i = 0; i < ArrayToFullInnerHTMlToStyle.length; i++) {
    styleEl.innerHTML += ArrayToFullInnerHTMlToStyle[i];
  }
}
InnerHtmlStyleTag(arrayAllElements);
