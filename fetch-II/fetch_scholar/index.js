// async function data(){
//     try {
//         let data2= await fetch('https://dummy.restapiexample.com/api/v1/employees')
//         let data3= await data2.json()
//         console.log(data3)
//     } catch (error) {
//         console.log(error)
//     }
// }
// data();

//map

// async function foo(){
//     try {
//         let operator= await fetch('https://hub.dummyapis.com/products')
//         let data=await operator.json()
//         console.log(data)
//     } catch (error) {
//       console.log(error)
//     }
// }
// foo()

// async function getData(){
//     try {
//         let operator=await fetch('https://hub.dummyapis.com/employee')
//         let operator2=await operator.json()
//         console.log(operator2)
//     } catch (error) {
//         console.log(error)
//     }
// }
// getData()

async function getData() {
  try {
    let operate = await fetch(
      "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
    );
    let append = await operate.json();
    console.log(append);
  } catch (error) {
    console.log(error);
  }
}
getData();

async function getData() {
  try {
    let operate =await fetch("https://hub.dummyapis.com/employee")
    let data=await operate.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
getData()



async function getData(){
  try {

    let operate=await fetch("https://hub.dummyapis.com/employee")
    let data=await operate.json()
    console.log(data)
    
  } catch (error) {
    console.log(error)
  }
}




async function getData(){
  try {
    let problems=await fetch("https://hub.dummyapis.com/employee")
    let data= await problems.json()
    console.log(data)
  } catch (error) {
    console.log(error)
    
  }
}