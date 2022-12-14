const menu = [
  {
    id: 1,
    title: "project AAAA",
    category: "shop",
    img: "./img/f1.jpg",
    desc: "lorem1lorem1loremloremloremlorem",
  },
  {
    id: 2,
    title: "project BBBB",
    category: "portfolio",
    img: "./img/f2.jpg",
    desc: "lorem2lorem2loremloremloremlorem",
  },
  {
    id: 3,
    title: "project CCCC",
    category: "orders",
    img: "./img/f4.jpg",
    desc: "lorem3lorem3loremloremloremlorem",
  },
  {
    id: 4,
    title: "project DDDD",
    category: "shop",
    img: "./img/f5.jpg",
    desc: "lorem4lorem4loremloremloremlorem",
  },
  {
    id: 5,
    title: "project EEEE",
    category: "orders",
    img: "./img/f6.jpg",
    desc: "lorem5lorem5loremloremloremlorem",
  },
  {
    id: 6,
    title: "project FFFF",
    category: "shop",
    img: "./img/f7.jpg",
    desc: "lorem6lorem6loremloremloremlorem",
  },
];
const gallary = document.querySelector(".gallary-grid");
const containerBtn = document.querySelector('.btn-container')


window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons()
});



function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);
    // return item;
    return `<div class="grid__item item-grid">
        <a href="https://www.google.ru">
          <div class="item-grid__inner">
            <img class="item-grid__img" src="${item.img}" alt="" />
            <div class="item-grid__title"><span>${item.title}</span></div>
          </div>
        </a>
      </div>`;
  });
  displayMenu = displayMenu.join("");

  gallary.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
          if (!values.includes(item.category)) {
            values.push(item.category);
          }
          return values;
        },
        ["all"]
      );
      const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}>
            ${category}
          </button>`;
      }).join("");
      containerBtn.innerHTML = categoryBtns;
      const filterBtns = containerBtn.querySelectorAll(".filter-btn");
      filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          const category = e.currentTarget.dataset.id;
          const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category;

            if (menuItem.category === category) {
              return menuItem;
            }
          });
          // console.log(menuCategory);
          if (category === "all") {
            displayMenuItems(menu);
          } else {
            displayMenuItems(menuCategory);
          }
        });
      });
}