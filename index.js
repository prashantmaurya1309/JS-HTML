// // console.log('hello new world');
// // let person={
// //     name : "asd",
// //     age: 22 
// // };
// // person.name="zxc";
// // console.log(person.name);
// // let colorList=['red','orange','yellow'];
// // colorList[3]='white';
// // console.log(colorList);

// let data=[
//     {
//         id: 1,
//         fullName : 'Bruce Wayne',
//         subject1 : 80,
//         subject2 : 45,
//         subject3 : 90 
//     },
//     {
//         id: 2,
//         fullName : 'Diana',
//         subject1 : 80,
//         subject2 : 45,
//         subject3 : 90 
//     },
//     {
//         id: 3,
//         fullName : 'Clark Kent',
//         subject1 : 80,
//         subject2 : 45,
//         subject3 : 90 
//     },
//     {
//         id: 4,
//         fullName : 'Barry Allen',
//         subject1 : 80,
//         subject2 : 45,
//         subject3 : 90 
//     },
//     {
//         id: 5,
//         fullName : 'Arthur Curry',
//         subject1 : 80,
//         subject2 : 45,
//         subject3 : 90 
//     },
//     {
//         id: 6,
//         fullName : 'Victor Stone',
//         subject1 : 99,
//         subject2 : 87,
//         subject3 : 64 
//     }
// ];

// console.log(data[1].fullName);

// let rows = [{
//     name: "John",
//     age: 20,
//     email: "xx@hotmail.com"
// }, {
//     name: "Jack",
//     age: 50,
//     email: "xxx@hotmail.com"
// }, {
//     name: "Son",
//     age: 45,
//     email: "xxxx@hotmail.com"
// }];

// var html = "<table border='1|1'>";
// for (let i = 0; i < rows.length; i++) {
//     html+="<tr>";
//     html+="<td>"+rows[i].name+"</td>";
//     html+="<td>"+rows[i].age+"</td>";
//     html+="<td>"+rows[i].email+"</td>";
    
//     html+="</tr>";

// }
// html+="</table>";
// document.getElementById("box").innerHTML = html;
const data = [
    {
      id: 1,
      name: "Bruce Wayne",
      subject1: 80,
      subject2: 45,
      subject3: 90,
    },
    {
      id: 2,
      name: "Diana",
      subject1: 56,
      subject2: 74,
      subject3: 78,
    },
    {
      id: 3,
      name: "Clark Kent",
      subject1: 67,
      subject2: 78,
      subject3: 90,
    },
    {
      id: 4,
      name: "Barry Allen",
      subject1: 89,
      subject2: 35,
      subject3: 64,
    },
    {
      id: 5,
      name: "Arthur Curry",
      subject1: 76,
      subject2: 65,
      subject3: 100,
    },
    {
      id: 6,
      name: "Victor Stone",
      subject1: 99,
      subject2: 87,
      subject3: 64,
    },
  ];
  
  const onLoad = () => {
    let tbodyEl = document.getElementById("studentTableBody");
  
    data.forEach((item, index) => {
      let html = `
                <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.subject1}</td>
                <td>${item.subject2}</td>
                <td>${item.subject3}</td>
                <td>${Math.max(item.subject1, item.subject2, item.subject3)}</td>
                </tr>
            `;
  
      tbodyEl.innerHTML += html;
    });
  };
  
  console.log(data);