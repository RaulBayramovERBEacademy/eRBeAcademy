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
// console.log(Raul.greet())
document.addEventListener('DOMContentLoaded', function(){
function makeXhrRequest(value, type="name"){
    let url = type === "name" 
        ? `https://restcountries.com/v3.1/name/${value}`
        : `https://restcountries.com/v3.1/alpha/${value}`;
    
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    return xhr;
}

function generateHTML(div, country){
            let countriesDive = document.querySelector(div);
            if(div === '.countries'){
                countriesDive.innerHTML = "";
            }
            let countryDiv = document.createElement('div');
            countryDiv.classList.add('country-card'); 
            let flag = document.createElement('img');
            flag.src = country.flags.png;
            let name = document.createElement('h2');
            name.textContent = country.name.common;
            let capital = document.createElement('p');
            capital.textContent = `Capital: ${country.capital ? country.capital : 'N/A'}`;
            let region = document.createElement('p');
            region.textContent = `Region: ${country.region}`;
            let population = document.createElement('p');
            population.textContent = `Population: ${country.population}`;
            countriesDive.appendChild(countryDiv);
            countryDiv.appendChild(flag); 
            countryDiv.appendChild(name);
            countryDiv.appendChild(capital);
            countryDiv.appendChild(region);
            countryDiv.appendChild(population);
            console.log(country);
}
function displayCountries(div){
    let value = document.querySelector('.search').value;
    const req = makeXhrRequest(value);
    req.addEventListener("load",  function(){
        if(this.status === 200){
            let [country] = JSON.parse(this.responseText);
            generateHTML(div, country);
            if(country.borders){
                document.querySelector(".adjacentCountries").innerHTML = "";
                displayAdjacentCountries(".adjacentCountries", country.borders);
            }
        };
    });
}
function displayAdjacentCountries(div, borders, index = 0){
    if(index >= borders.length) return; // Base case: if index exceeds borders length, stop recursion
    let req = makeXhrRequest(borders[index], "alpha");
    req.addEventListener("load",  function(){
        if(this.status === 200){
            let [country] = JSON.parse(this.responseText);
            generateHTML(div, country);
            displayAdjacentCountries(div, borders, index + 1); // Recursive call with incremented index
        };
    }); 
}
document.querySelector('.search-btn').addEventListener('click', ()=>displayCountries('.countries'));

});
