const list = document.getElementById("infi-list");

let count = 1;

// Function to add items
function addItems(num) {

  for (let i = 0; i < num; i++) {

    const li = document.createElement("li");

    li.textContent = "List Item " + count++;

    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Infinite scroll event
list.addEventListener("scroll", () => {

  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {

    // Add 2 more items when reaching bottom
    addItems(2);
  }
});