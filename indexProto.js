const { Employee, EmployeeList } = require('./employee');
const fs = require('fs');

// // Create Employee objects
// const emp1 = Employee.create({ name: "John", salary: 1000, id: "1001" });
// const emp2 = Employee.create({ name: "Jane", salary: 1500, id: "1002" });
// const emp3 = Employee.create({ name: "Jim", salary: 1200, id: "1003" });
// // Create EmployeeList
// const employeeList = EmployeeList.create({ employees: [emp1, emp2,emp3] });

// // Serialize the EmployeeList to a buffer
// const buffer = EmployeeList.encode(employeeList).finish();
// console.log("Serialized Buffer:", buffer);

// fs.writeFileSync('employeeBinary', buffer);

fs.readFileSync('./employeeBinary', (err, data) => {
    if (err) {
        console.log(err);
    }
    const decoded = EmployeeList.decode(data);
    console.log("Decoded EmployeeList:", decoded);
})
// Deserialize the buffer back into an EmployeeList
// const decoded = EmployeeList.decode(buffer);
// console.log("Decoded EmployeeList:", decoded);


const data = fs.readFileSync('employeeBinary');

const decoded = EmployeeList.decode(data);
console.log("Decoded EmployeeList:", decoded);