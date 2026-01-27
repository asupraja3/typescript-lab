
let employeeData = `[
    {"id": 1, "name": "Alice", "department": "Engineering", "active": true},
    {"id": 2, "name": "Bob", "department": "Sales", "active": false},
    {"id": 3, "name": "Charlie", "department": "Engineering", "active": true},
    {"id": 4, "name": "Diana", "department": "HR", "active": true},
    {"id": 5, "name": "Eve", "department": "Sales", "active": true}
]`;

interface Employee {
    id:number;
    name:string;
    department:string;
    active:boolean;
} 

let employees: Employee[] = JSON.parse(employeeData)

let filtEmp:Employee[] = employees.filter(x=>x.active===true)

let empMap: {[key:string]:string[]} = {}

employees.forEach(emp=>{
    if(!empMap[emp.department]){
        empMap[emp.department] = []
    }

    empMap[emp.department].push(emp.name)
})

console.log(empMap)
