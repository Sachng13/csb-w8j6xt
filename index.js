const items = document.getElementsByClassName("items");
const left = document.getElementById("left");
const right = document.getElementById("right");
const btn = document.getElementById("btn");
let item;

btn.addEventListener("click", reset);
function reset() {
  const nodeList = right.children;
  while (nodeList.length > 0) {
    for (var i = 0; i < nodeList.length; i++) {
      let el = right.removeChild(nodeList[i]);
      left.appendChild(el);
    }
  }
}
for (item of items) {
  item.addEventListener("dragstart", function (e) {
    let selected = e.target;
    selected.classList.add("dragging");

    right.addEventListener("dragover", function (e) {
      right.style.backgroundColor = "grey";
      e.preventDefault();
    });
    right.addEventListener("drop", function (e) {
      selected.classList.remove("dragging");
      right.style.background = "none";
      right.appendChild(selected);
      selected = null;
    });
  });
  item.addEventListener("dragend", function (e) {
    if (right.contains(e.target)) {
      alert("Succesfully dragged ");
    }
    e.target.classList.remove("dragging");
  });
}
