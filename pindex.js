// let image = document.querySelector(".heroImage");

// let click = document.querySelector('.show');
// click.addEventListener('click', load);

// function load(){
//     let xhr =  new XMLHttpRequest();
//     xhr.open('GET', '../logo.png', true);
//     xhr.responseType = 'blob';
//     xhr.send()
//     xhr.onprogress = function(){
//         image.alt = "Loading...";
//     }
//     xhr.onload =  function(){
//         let url  =  URL.createObjectURL(xhr.response);
//         let img = document.createElement('img');
//         img.src= url;
//         image.appendChild(img)
//     }
// }

// let objectlt = function(name, birthD){
//     this.name = name;
//     this.birthD =  birthD;
//     this.calcAge = function(){
//         let diff = new Date() - this.birthD; // milliseconds
//         let ageDate = new Date(diff); // convert to date object
//         return Math.abs(ageDate.getUTCFullYear() - 1970); // years
//     }
// }
// objectlt.prototype.greet = function(){
//     return `Hi ${this.name}`;
// }
// let Raul =  new objectlt("Raul", new Date("2003-03-12"));
// console.log(Raul.calcAge());
// console.log(objectlt.prototype);
// console.log(Raul.__proto__)
// console.log(Raul.prototype)
// // console.log(Raul.greet())
// document.addEventListener("DOMContentLoaded", function () {
//   function makeXhrRequest(value, type = "name") {
//     let url =
//       type === "name"
//         ? `https://restcountries.com/v3.1/name/${value}`
//         : `https://restcountries.com/v3.1/alpha/${value}`;

//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.send();
//     return xhr;
//   }

//   function generateHTML(div, country) {
//     let countriesDive = document.querySelector(div);
//     if (div === ".countries") {
//       countriesDive.innerHTML = "";
//     }
//     let countryDiv = document.createElement("div");
//     countryDiv.classList.add("country-card");
//     let flag = document.createElement("img");
//     flag.src = country.flags.png;
//     let name = document.createElement("h2");
//     name.textContent = country.name.common;
//     let capital = document.createElement("p");
//     capital.textContent = `Capital: ${
//       country.capital ? country.capital : "N/A"
//     }`;
//     let region = document.createElement("p");
//     region.textContent = `Region: ${country.region}`;
//     let population = document.createElement("p");
//     population.textContent = `Population: ${country.population}`;
//     countriesDive.appendChild(countryDiv);
//     countryDiv.appendChild(flag);
//     countryDiv.appendChild(name);
//     countryDiv.appendChild(capital);
//     countryDiv.appendChild(region);
//     countryDiv.appendChild(population);
//     console.log(country);
//   }
//   function displayCountries(div) {
//     let value = document.querySelector(".search").value;
//     let promise = new Promise((resolve, reject) => {
//       const req = makeXhrRequest(value);
//       req.addEventListener("load", function () {
//         if (this.status === 200) {
//           let [country] = JSON.parse(this.responseText);
//           resolve({ div, country });
//         } else {
//           reject(new Error("Country not found"));
//         }
//         req.onerror = function () {
//           reject(new Error("Network Error"));
//         };
//       });
//     });
//     promise
//       .then(({ div, country }) => {
//         generateHTML(div, country);
//         return { div, country };
//       })
//       .then(({ div, country }) => {
//         if (country.borders) {
//           document.querySelector(".adjacentCountries").innerHTML = "";
//           displayAdjacentCountries(".adjacentCountries", country.borders);
//         }
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }
//   function displayAdjacentCountries(div, borders, index = 0) {
//     if (index >= borders.length) return; // Base case: if index exceeds borders length, stop recursion
//     let promise = new Promise((resolve, reject) => {
//       let req = makeXhrRequest(borders[index], "alpha");
//       req.addEventListener("load", function () {
//         if (this.status === 200) {
//           let [country] = JSON.parse(this.responseText);
//           resolve({ div, country, borders }); // Recursive call with incremented index
//         } else {
//           reject(new Error("Country not found"));
//         }
//       });
//       req.onerror = function () {
//         reject(new Error("Network Error"));
//       };
//     });
//     promise
//       .then(({ div, country }) => {
//         generateHTML(div, country);
//         return { div, borders, newIndex: index + 1 };
//       })
//       .then(({ div, borders, newIndex }) => {
//         displayAdjacentCountries(div, borders, newIndex);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }
//   document
//     .querySelector(".search-btn")
//     .addEventListener("click", () => displayCountries(".countries"));
// });

document.addEventListener("DOMContentLoaded", function () {
  function makeXhrRequest(value, type = "name") {
    let promise = fetch(
      type === "name"
        ? `https://restcountries.com/v3.1/name/${value}`
        : `https://restcountries.com/v3.1/alpha/${value}`
    ).then((response) => {
      errorHandler(response);
      return response.json();
    });
    return promise;
  }

  function generateHTML(div, country) {
    let countriesDive = document.querySelector(div);
    if (div === ".countries") {
      countriesDive.innerHTML = "";
    }
    let countryDiv = document.createElement("div");
    countryDiv.classList.add("country-card");
    let flag = document.createElement("img");
    flag.src = country.flags.png;
    let name = document.createElement("h2");
    name.textContent = country.name.common;
    let capital = document.createElement("p");
    capital.textContent = `Capital: ${
      country.capital ? country.capital : "N/A"
    }`;
    let region = document.createElement("p");
    region.textContent = `Region: ${country.region}`;
    let population = document.createElement("p");
    population.textContent = `Population: ${country.population}`;
    countriesDive.appendChild(countryDiv);
    countryDiv.appendChild(flag);
    countryDiv.appendChild(name);
    countryDiv.appendChild(capital);
    countryDiv.appendChild(region);
    countryDiv.appendChild(population);
    console.log(country);
  }

  function displayCountries(div) {
    let value = document.querySelector(".search").value;
    makeXhrRequest(value)
      .then((response) => {
        generateHTML(div, response[0]);
        return { div: ".adjacentCountries", country: response[0] };
      })
      .then(({ div, country }) => {
        if (country.borders) {
          document.querySelector(div).innerHTML = "";
          let borderCountries = country.borders.map((border) => {
            return makeXhrRequest(border, "alpha");
          });
          return Promise.all(borderCountries);
        } else {
          throw new Error("No adjacent countries");
        }
      })
      .then((borderCountries) => {
        borderCountries.forEach((countryData) => {
          generateHTML(".adjacentCountries", countryData[0]);
        });
      })
      .catch((error) => {
        console.log(error);
        document.querySelector(".adjacentCountries").innerHTML = error.message;
      });
  }

  function errorHandler(response) {
    if (!response.ok) {
      const div = document.querySelector(".adjacentCountries");
      div.insertAdjacentHTML(
        "beforeend",
        `<p>${response.status}: ${response.statusText}</p>`
      );
      div.style.color = "red";
      div.style.fontSize = "20px";
      if (response.status == 404) {
        throw new Error("Network response was not ok");
      } else if (response.status == 500) {
        throw new Error("Server error");
      } else {
        throw new Error("Unknown error occurred");
      }
    } else {
      return response;
    }
  }
  document
    .querySelector(".search-btn")
    .addEventListener("click", () => displayCountries(".countries"));
});
