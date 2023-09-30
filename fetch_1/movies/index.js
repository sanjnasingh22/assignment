let searchBtn = document.getElementById("search-btn");
let results = document.getElementById("search-results");
async function getData() {
  let value = document.getElementById("search").value;
  try {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=9f8c7bd&s=${value}`
    );
    let data = await response.json();
    let finalData = data.Search;
    mapData(finalData);
    console.log(finalData);
    console.log(data["Search"]);
  } catch (error) {
    console.log(error);
  }
}

searchBtn.addEventListener("click", () => {
  getData();
});

function mapData(data) {
  results.innerHTML = "";
  data.map((elem) => {
    let div = document.createElement("div");
    div.setAttribute("class", "movieDiv");
    let img = document.createElement("img");
    img.setAttribute("class", "movieImg");
    img.setAttribute("src", elem.Poster);
    let name = document.createElement("p");
    name.setAttribute("class", "movieName");
    name.innerText = "Name: " + elem.Title;
    let year = document.createElement("p");
    year.setAttribute("class", "movieYear");
    year.innerText = "Year: " + elem.Year;
    div.append(img, name, year);
    results.append(div);
  });
}
