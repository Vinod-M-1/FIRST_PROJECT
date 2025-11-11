// let expenses  = JSON.parse(localStorage.getItem('expenses'))
// let container = document.getElementById('expense-container');
// expenses.forEach(ele => {
//     let row = document.createElement("div");
//     row.innerHTML = `${ele.type} — ₹${ele.cost} — ${ele.category} — ${ele.date}`;
//     container.appendChild(row)
// });
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

let tableBody = document.getElementById('expense-body');

expenses.forEach(exp => {
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${exp.type}</td>
        <td>₹${exp.cost}</td>
        <td>${exp.category}</td>
        <td>${exp.date}</td>
    `;

    tableBody.appendChild(row);
});
