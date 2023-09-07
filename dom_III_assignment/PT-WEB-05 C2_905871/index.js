// fill in javascript code here

let data = [];

let form = document.getElementById("doctor_form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let dName = document.getElementById("name").value;
  let dId = document.getElementById("docID").value;
  let department = document.getElementById("dept").value;
  let experince = document.getElementById("exp").value;
  let email = document.getElementById("email").value;
  let mnumber = document.getElementById("mbl").value;

  let obj = {};
  obj.doctor_name = dName;
  obj.doctor_id = dId;
  obj.department = department;
  obj.experince = experince;
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
    td1.innerText = elem.doctor_name;

    let td2 = document.createElement("td");
    td2.innerText = elem.doctor_id;

    let td3 = document.createElement("td");
    td3.innerText = elem.department;

    let td4 = document.createElement("td");
    td4.innerText = elem.experince;

    let td5 = document.createElement("td");
    td5.innerText = elem.email;

    let td6 = document.createElement("td");
    td6.innerText = elem.mobile;

    let td7 = document.createElement("td");
    td7.innerText = "";

    let td8 = document.createElement("td");
    td8.innerText = "";

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

    document.querySelector("tbody").append(tr);
  });
}
