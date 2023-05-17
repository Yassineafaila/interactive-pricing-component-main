//I made an object of views and pricing 
let pricing = {
  8: "10K PAGEVIEWS",
  12: "50K PAGEVIEWS",
  16: "100K PAGEVIEWS",
  20: "300K PAGEVIEWS",
  24: "500K PAGEVIEWS",
  28: "800K PAGEVIEWS",
  36: "1M PAGEVIEWS",
};
let views = document.querySelector(".page__views");
let price = document.querySelector(".price");
let form = document.querySelector("form");
let checkbox = document.querySelector("input[type='checkbox']");
let range = document.querySelector("input[type='range'");


// range.addEventListener("change", function () {
//   if (!checkbox.checked) {
//     for (let i = 0; i < Object.keys(pricing).length; i++) {
//       if (Object.keys(pricing)[i] === this.value) {
//         views.innerHTML = Object.values(pricing)[i];
//         price.innerHTML = `$${Object.keys(pricing)[i]}.00<small>/month</small>`;
//       }
//     }
//   } else {
//     for (let i = 0; i < Object.keys(pricing).length; i++) {
//       if (Object.keys(pricing)[i] === this.value) {
//         views.innerHTML = Object.values(pricing)[i];
//         price.innerHTML = `$${
//           (Object.keys(pricing)[i] * 25) / 100
//         }.00<small>/month</small>`;
//       }
//     }
//   }
// });

form.addEventListener("submit", function () {
    // this code is for the checkbox is checked and send the price to backend:
    if (checkboxValid()) {
        for (let i = 0; i < Object.keys(pricing).length; i++) {
            if (Object.keys(pricing)[i] === range.value) {
                let price = (Object.keys(pricing)[i] * 25) / 100;
                console.log(price);
            }
        }
    } else {
        for (let i = 0; i < Object.keys(pricing).length; i++) {
            if (Object.keys(pricing)[i] === range.value) {
                let price = Object.keys(pricing)[i];
                console.log(price);
            }
        }
    }
});
//this function to change the element with the changing of input range:
function getValueOfRange(value) {
    if (checkboxValid()) {
        for (let i = 0; i < Object.keys(pricing).length; i++) {
            if (Object.keys(pricing)[i] === value) {
                views.innerHTML = Object.values(pricing)[i];
                price.innerHTML = `$${(Object.keys(pricing)[i] * 25) / 100
                    }.00<small>/month</small>`;
            }
        }
        
    } else {
          for (let i = 0; i < Object.keys(pricing).length; i++) {
            if (Object.keys(pricing)[i] === value) {
              views.innerHTML = Object.values(pricing)[i];
              price.innerHTML = `$${Object.keys(pricing)[i]}.00<small>/month</small>`;
            }
          }
    }
}
//this function to check in checkbox input is checked on not:
function checkboxValid() {
    let checkbox = document.querySelector("input[type='checkbox']");
    let isChecked = false;
    if (checkbox.checked) {
        isChecked=true
    }
    return isChecked;
}