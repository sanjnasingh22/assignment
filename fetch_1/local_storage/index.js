let allData = JSON.parse(localStorage.getItem("users")) || [];
let userData = document.querySelector(".userData");
let retrievDataDiv = document.getElementById("retrievData");
function submitDetails() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  let data = {
    name,
    age,
  };

  allData.push(data);
  localStorage.setItem("users", JSON.stringify(allData));
}

let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  submitDetails();
});

function retrieveData() {
  const storedData = JSON.parse(localStorage.getItem("users")) || [];

  // Clear the table
  userData.innerHTML = `
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

  const tbody = userData.querySelector("tbody");

  storedData.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.age}</td>
        `;
    tbody.appendChild(row);
  });
}

retrievDataDiv.addEventListener("click", function () {
  retrieveData();
});
