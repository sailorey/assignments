var employees = [""]

function Employee (name , jobTitle, salary , status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status || "Part-Time"
}
var rey = new Employee("Rey" , "Software Engineer" , "200k A Year" )
var haley = new Employee("Haley" , "Full-Time Mom" , "800k a Year" , "Full-Time")
var kade = new Employee("Kade" , "Baby Student" , "N/A" , "Part-Time")
var rose = new Employee("Rose" , "Baby School" , "1 Million A Year" , "Contract")


employees.push(rey,haley,kade,rose)


console.log(employees)
