const fs = require('fs');

const employees = [];

employees.push({
    "name": "John",
    "salary": 1000,
    "id":"1001"
})

employees.push({
    "name": "Jane",
    "salary": 1500,
    "id":"1002"
})

employees.push({
    "name": "Jim",
    "salary": 1200,
    "id":"1003"
});



console.log(JSON.stringify(employees));

fs.writeFileSync("jsondata.json", JSON.stringify(employees));