document.getElementById("add-btn").addEventListener("click", function () {
    
    let type = document.getElementById("exp-type").value.trim();
    let cost = document.getElementById("exp-cost").value.trim();
    let category = document.getElementById("exp-category").value.trim();
    let date = document.getElementById("exp-date").value.trim();

    if (!type || !cost || !date) {
        alert("Fill all fields.");
        return;
    }

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    expenses.push({ type, cost, category, date });

    localStorage.setItem("expenses", JSON.stringify(expenses));

    location.reload();
});
