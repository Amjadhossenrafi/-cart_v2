//for finding duplicate items in the bucket/cart
const findDup = (array, item) => {
  const dup = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      dup.push(i);
    }
  }
  return dup;
};
//for removing duplicates while rendering the bucket/cart
const removeDup = (arr) => {
  const set = new Set(arr);
  return [...set];
};
//for removing items from a specific index of an array
export const removeFromArray = (array, index) => {
  delete array[index];
  let remaining = array.filter((item) => item);
  return remaining;
};
//for displaying number of items in the bucket/cart
export const showNumberOfItems = (array, renderingArea) => {
  renderingArea.innerText = `${array.length} items`;
};
//for showing price
export const showPrice = (array, renderingArea) => {
  let netPrice = 0;
  array.forEach((item) => {
    netPrice += item.price;
  });
  renderingArea.textContent = `$${netPrice}`;
};

//function for rendering the  products on load
export const initialRender = (array, parent) => {
  array.forEach((item) => {
    let div = document.createElement("div");
    div.className = "product-preview";
    div.setAttribute("id", item.id);
    let template = `
    <h3>${item.name}</h3>
    <img src=${item.src} alt=${item.name} />
    <p>$${item.price}</p>
    <button class="add">add</button>
      `;
    div.innerHTML = template;

    parent.append(div);
  });
};
//function for rendering items specifically in the bucket/cart area
export const renderBucket = (array, parent) => {
  parent.innerHTML = null;
  removeDup(array).forEach((item) => {
    let numberOfItems = findDup(array, item).length;
    let div = document.createElement("div");
    div.className = "product-preview";
    div.setAttribute("id", item.id);
    let template = `
    <h3>${item.name}</h3>
    <img src=${item.src} alt=${item.name} />
    <p>$${item.price}</p>
    <p>x${numberOfItems}</p>
    <button class="remove">remove</button>
      `;
    div.innerHTML = template;
    parent.append(div);
  });
};
