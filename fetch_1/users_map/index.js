function getData() {
  fetch("https://reqres.in/api/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (books) {
      let data = books.data;
      mapData(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function mapData(details) {
  details.map(function (elem) {
    let div = document.createElement("div");
    div.style.height = "300px";
    div.style.width = "300px";
    div.style.border = "2px solid black";

    let img = document.createElement("img");
    img.style.height = "100px";
    img.style.width = "100px";
    img.setAttribute("src", elem.avatar);

    let id = document.createElement("p");
    id.innerText = elem.id;

    let name = document.createElement("p");
    name.innerText = elem.first_name + " " + elem.last_name;

    let email = document.createElement("p");
    email.innerText = elem.email;

    div.append(img, id, name, email);

    document.querySelector(".allCard").append(div);
  });
}

let rButton = document.getElementById("retrieve");
rButton.addEventListener("click", function () {
  getData();
});
