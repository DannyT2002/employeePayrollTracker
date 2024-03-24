// Get a reference to the 'Add Employees' button element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Function to collect employee data from user input
const collectEmployees = function() {
  // Array to store employee objects
  const employees = [];

  // Prompt the user to enter the number of employees
  const numberOfEmployees = parseInt(prompt("Enter the number of employees:"));

  // Loop through to collect data for each employee
  for (let i = 0; i < numberOfEmployees; i++) {
    const firstName = prompt(`Enter the first name of employee ${i + 1}:`);
    const lastName = prompt(`Enter the last name of employee ${i + 1}:`);
    const salary = parseFloat(prompt(`Enter the salary of employee ${i + 1}:`));
    
    // Create an employee object and push it to the employees array
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };
    employees.push(employee);
   }

   return employees;
}

// Function to calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  // Calculate total salary
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }

  // Calculate average salary
  const averageSalary = totalSalary / employeesArray.length;

  // Display average salary in USD format
  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })}`);
}

// Function to select and display a random employee
const getRandomEmployee = function(employeesArray) {
  // Generate random index within the range of employeesArray length
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  // Get the random employee object
  const randomEmployee = employeesArray[randomIndex];

  // Display random employee details
  console.log("Random Employee:");
  console.table(randomEmployee);
}

// Function to display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table element
  const employeeTable = document.querySelector('#employee-table');

  // Clear the existing content of the employee table
  employeeTable.innerHTML = '';

  // Loop through the employeesArray and create table rows for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    // Create a new table row
    const newTableRow = document.createElement("tr");

    // Create table cells for first name, last name, and salary
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });
    newTableRow.append(salaryCell);

    // Append the new table row to the employee table
    employeeTable.append(newTableRow);
  }
}

// Function to track and display employee data
const trackEmployeeData = function() {
  // Collect employee data
  const employees = collectEmployees();

  // Display collected employee data in console
  console.table(employees);

  // Calculate and display the average salary
  displayAverageSalary(employees);

  // Display a random employee
  console.log('==============================');
  getRandomEmployee(employees);

  // Sort employees by last name
  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  // Display employees in sorted order in HTML table
  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button to trigger tracking of employee data
addEmployeesBtn.addEventListener('click', trackEmployeeData);
