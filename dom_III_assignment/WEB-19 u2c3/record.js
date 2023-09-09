// fill in javascript code here
let form = document.querySelector("form");
let data = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let dname = document.getElementById("name").value;
  let eId = document.getElementById("employeeID").value;
  let department = document.getElementById("department").value;
  let experience = document.getElementById("exp").value;
  let email = document.getElementById("email").value;
  let mnumber = document.getElementById("mbl").value;

  let obj = {};
  obj.employee_name = dname;
  obj.employee_id = eId;
  obj.department = department;
  obj.experience = experience;
  obj.email = email;
  obj.mobile = mnumber;
  data.push(obj);
  mapData();
  console.log(data);
});

function mapData() {
  document.querySelector("tbody").innerHTML = "";
  data.map(function (elem) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = elem.employee_name;

    let td2 = document.createElement("td");
    td2.innerText = elem.employee_id;

    let td3 = document.createElement("td");
    td3.innerText = elem.department;

    let td4 = document.createElement("td");
    td4.innerText = elem.experience;

    let td5 = document.createElement("td");
    td5.innerText = elem.email;

    let td6 = document.createElement("td");
    td6.innerText = elem.mobile;

    let td7 = document.createElement("td");
    td7.innerText = "";

    let td8 = document.createElement("td");
    td7.innerText = "";

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

    document.querySelector("tbody").append(tr);
  });
}
