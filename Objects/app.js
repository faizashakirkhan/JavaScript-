//1
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];

let totalAllItems = 0;

itemsArray.forEach(item => {
    // Convert price and quantity to numbers
    const price = Number(item.price);
    const quantity = Number(item.quantity);

    // Calculate total price for the current item
    const totalPrice = price * quantity;
    console.log(`Total price for ${item.name}: ${totalPrice}`);

    // Add to overall total
    totalAllItems += totalPrice;
});

console.log(`Total price for all items: ${totalAllItems}`);

//2

var user = {
    name: "faiza",
    email: "faizakhan@example.com",
    password: "khan123",
    age: 18,
    gender: "Female",
    city: "New York",
    country: "USA"
};

console.log("age" in user);    // true
console.log("country" in user); // true

console.log("firstName" in user); // false
console.log("lastName" in user);  // false

//3


function User(name, email, password, age, gender, country) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
    this.gender = gender;
    this.country = country;
}

var user1 = new User("Alice", "alice@example.com", "alice123", 25, "Female", "USA");
var user2 = new User("Bob", "bob@example.com", "bobs", 30, "Male", "UK");
var user3 = new User("Brown", "charlie@example.com", "pass", 35, "Male", "Australia");

console.log(user1);
console.log(user2);
console.log(user3);

//4


function PopulationRecord(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}


document.getElementById("populationForm").addEventListener("submit", function (event) {
    event.preventDefault();


    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById("address").value;
    const education = document.getElementById("education").value;
    const profession = document.getElementById("profession").value;


    const newRecord = new PopulationRecord(name, gender, address, education, profession);
    saveRecord(newRecord);
    displayRecords();
    document.getElementById("populationForm").reset();
});
function saveRecord(record) {
    let records = JSON.parse(localStorage.getItem("populationRecords")) || [];
    records.push(record);
    localStorage.setItem("populationRecords", JSON.stringify(records));
}
function displayRecords() {
    const records = JSON.parse(localStorage.getItem("populationRecords")) || [];
    const recordList = document.getElementById("recordList");

    recordList.innerHTML = "";
    records.forEach((record, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. Name: ${record.name}, Gender: ${record.gender}, Address: ${record.address}, Education: ${record.education}, Profession: ${record.profession}`;
        recordList.appendChild(listItem);
    });
}
window.onload = function () {
    displayRecords();
};
