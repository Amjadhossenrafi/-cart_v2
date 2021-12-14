import { data as products } from "./data.js";
import {
  initialRender,
  renderBucket,
  removeFromArray,
  showNumberOfItems,
  showPrice,
} from "./funcs.js";

//initial render
let productsContainer = document.querySelector(".products-container");
initialRender(products, productsContainer);

//adding item to the array
var bucket = [];
const numberOfItemsContainer = document.querySelector(".number");
const priceContainer = document.querySelector(".price");
const bucketContainer = document.querySelector(".bucket");
const addBtns = document.querySelectorAll(".add");
addBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let id = parseInt(e.target.parentElement.getAttribute("id"));
    const addedItem = products.filter((item) => item.id == id);
    bucket.push(...addedItem);
    renderBucket(bucket, bucketContainer);
    showNumberOfItems(bucket, numberOfItemsContainer);
    showPrice(bucket, priceContainer);
  });
});

//deleting items from the bucket
bucketContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let id = parseInt(e.target.parentElement.getAttribute("id"));
    let filtered = bucket.filter((item) => item.id == id);
    let index = bucket.indexOf(filtered[0]);
    const remainingItems = removeFromArray(bucket, index);
    bucket = remainingItems;
    renderBucket(bucket, bucketContainer);
    showNumberOfItems(bucket, numberOfItemsContainer);
    showPrice(bucket, priceContainer);
  }
});
