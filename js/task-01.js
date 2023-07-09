const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEl.length);

categoriesEl.forEach(function (el, index) {
  
    console.log("Category:", el.firstElementChild.textContent);
  
    // Вариант 1
    // const subcategoryEl = el.querySelectorAll("li");
    // console.log("Elements:", subcategoryEl.length);
    
    // Вариант 2
    console.log("Elements:", el.lastElementChild.children.length);
});
