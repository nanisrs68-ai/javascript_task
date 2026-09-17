// ==========================================
// EMPLOYEE MANAGEMENT DASHBOARD
// ==========================================
 
 
// API URL
 
const API_URL = "https://dummyjson.com/users";
 
 
// Global employee array
 
let employees = [];
 
 
// Current department filter
 
let currentDepartment = "All";
 
 
// Current search text
 
let currentSearch = "";
 
 
// ==========================================
// DOM ELEMENTS
// ==========================================
 
const employeeContainer =
    document.getElementById("employeeContainer");
 
const employeeCount =
    document.getElementById("employeeCount");
 
const displayCount =
    document.getElementById("displayCount");
 
const totalSalary =
    document.getElementById("totalSalary");
 
const averageSalary =
    document.getElementById("averageSalary");
 
const highestSalary =
    document.getElementById("highestSalary");
 
const highestEmployee =
    document.getElementById("highestEmployee");
 
const searchInput =
    document.getElementById("searchInput");
 
const searchBtn =
    document.getElementById("searchBtn");
 
const employeeForm =
    document.getElementById("employeeForm");
 
const sortSelect =
    document.getElementById("sortSelect");
 
const statusMessage =
    document.getElementById("statusMessage");
 
 
// ==========================================
// FETCH EMPLOYEES
// ==========================================
 
function fetchEmployees() {
 
    showStatus(
        "Loading employees...",
        "loading"
    );
 
 
    fetch(API_URL)
 
        .then(response => {
 
            // Check HTTP response
 
            if (!response.ok) {
 
                throw new Error(
                    "Failed to fetch employee data"
                );
 
            }
 
            return response.json();
 
        })
 
        .then(data => {
 
            console.log("API Response:", data);
 
 
            // Convert API users into our employee format
 
            employees = data.users.map(
                (user, index) => {
 
                    const {
                        id,
                        firstName,
                        lastName,
                        age,
                        email,
                        phone,
                        image,
                        company
                    } = user;
 
 
                    // Salary generated for project purpose
 
                    const salary =
                        30000 + (index * 2500);
 
 
                    // Department normalization
 
                    const departments = [
                        "IT",
                        "HR",
                        "Finance",
                        "Marketing"
                    ];
 
 
                    const department =
                        departments[
                            index % departments.length
                        ];
 
 
                    return {
 
                        id: id,
 
                        name:
                            `${firstName} ${lastName}`,
 
                        age: age,
 
                        email: email,
 
                        phone: phone,
 
                        image: image,
 
                        company:
                            company?.name || "N/A",
 
                        department:
                            department,
 
                        salary:
                            salary
 
                    };
 
                }
            );
 
 
            // Display employees
 
            displayEmployees(employees);
 
 
            // Update statistics
 
            updateDashboard(employees);
 
 
            showStatus(
                "Employee data loaded successfully.",
                "success"
            );
 
        })
 
        .catch(error => {
 
            console.error(error);
 
 
            showStatus(
                "Unable to load employee data. Please try again.",
                "error"
            );
 
 
            employeeContainer.innerHTML = `
                <div class="no-employees">
                    ❌ Unable to load employee data.
                </div>
            `;
 
        })
 
        .finally(() => {
 
            console.log(
                "API request completed."
            );
 
        });
 
}
 
 
// ==========================================
// DISPLAY EMPLOYEES
// ==========================================
 
function displayEmployees(employeeList) {
 
    employeeContainer.innerHTML = "";
 
 
    if (employeeList.length === 0) {
 
        employeeContainer.innerHTML = `
            <div class="no-employees">
                No employees found.
            </div>
        `;
 
        updateEmployeeCount(0);
 
        return;
    }
 
 
    employeeList.forEach(employee => {
 
        const card =
            document.createElement("div");
 
        card.className =
            "employee-card";
 
 
        const {
            id,
            name,
            age,
            email,
            phone,
            image,
            department,
            salary
        } = employee;
 
 
        card.innerHTML = `
 
            <img
                src="${image}"
                alt="${name}"
                class="employee-image"
            >
 
            <h3>${name}</h3>
 
            <p class="employee-info">
                <strong>Age:</strong>
                ${age}
            </p>
 
            <p class="employee-info">
                <strong>Email:</strong>
                ${email}
            </p>
 
            <p class="employee-info">
                <strong>Phone:</strong>
                ${phone}
            </p>
 
            <span class="department">
                ${department}
            </span>
 
            <p class="employee-info">
                <strong>Salary:</strong>
                ₹${salary.toLocaleString("en-IN")}
            </p>
 
            <button
                class="delete-btn"
                onclick="deleteEmployee(${id})"
            >
                Delete
            </button>
 
        `;
 
 
        employeeContainer.appendChild(card);
 
    });
 
 
    updateEmployeeCount(employeeList.length);
 
}
 
 
// ==========================================
// SEARCH EMPLOYEES
// ==========================================
 
function searchEmployees() {
 
    currentSearch =
        searchInput.value
            .trim()
            .toLowerCase();
 
 
    applyFilters();
 
}
 
 
// ==========================================
// FILTER DEPARTMENT
// ==========================================
 
function filterDepartment(department) {
 
    currentDepartment =
        department;
 
 
    applyFilters();
 
}
 
 
// ==========================================
// APPLY SEARCH + DEPARTMENT FILTER
// ==========================================
 
function applyFilters() {
 
    let filteredEmployees =
        employees;
 
 
    // Search filter
 
    if (currentSearch !== "") {
 
        filteredEmployees =
            filteredEmployees.filter(
                employee =>
                    employee.name
                        .toLowerCase()
                        .includes(currentSearch)
            );
 
    }
 
 
    // Department filter
 
    if (currentDepartment !== "All") {
 
        filteredEmployees =
            filteredEmployees.filter(
                employee =>
                    employee.department ===
                    currentDepartment
            );
 
    }
 
 
    // Sort filtered data
 
    filteredEmployees =
        sortEmployees(
            filteredEmployees
        );
 
 
    // Display
 
    displayEmployees(
        filteredEmployees
    );
 
 
    // Update statistics based on displayed employees
 
    updateDashboard(
        filteredEmployees
    );
 
}
 
 
// ==========================================
// SORT EMPLOYEES
// ==========================================
 
function sortEmployees(employeeList) {
 
    const sortValue =
        sortSelect.value;
 
 
    // Create a copy using spread operator
 
    const sortedEmployees =
        [...employeeList];
 
 
    if (sortValue === "nameAsc") {
 
        sortedEmployees.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );
 
    }
 
 
    else if (sortValue === "nameDesc") {
 
        sortedEmployees.sort(
            (a, b) =>
                b.name.localeCompare(a.name)
        );
 
    }
 
 
    else if (sortValue === "ageAsc") {
 
        sortedEmployees.sort(
            (a, b) =>
                a.age - b.age
        );
 
    }
 
 
    else if (sortValue === "ageDesc") {
 
        sortedEmployees.sort(
            (a, b) =>
                b.age - a.age
        );
 
    }
 
 
    else if (sortValue === "salaryAsc") {
 
        sortedEmployees.sort(
            (a, b) =>
                a.salary - b.salary
        );
 
    }
 
 
    else if (sortValue === "salaryDesc") {
 
        sortedEmployees.sort(
            (a, b) =>
                b.salary - a.salary
        );
 
    }
 
 
    return sortedEmployees;
 
}
 
 
// ==========================================
// ADD EMPLOYEE
// ==========================================
 
function addEmployee(event) {
 
    event.preventDefault();
 
 
    // Get form values
 
    const name =
        document.getElementById("name")
            .value
            .trim();
 
 
    const age =
        Number(
            document.getElementById("age")
                .value
        );
 
 
    const email =
        document.getElementById("email")
            .value
            .trim();
 
 
    const department =
        document.getElementById("department")
            .value;
 
 
    const salary =
        Number(
            document.getElementById("salary")
                .value
        );
 
        const Phone= Number(
            document.getElementById("Phone")
            .value
        );
 
 
    // Create employee object
 
    const employee = {
 
        id: Date.now(),
 
        name: name,
 
        age: age,
 
        email: email,
 
        department: department,
 
        salary: salary,
 
        phone: Phone,
 
        image:
            "https://dummyjson.com/icon/default/128"
 
    };
 
 
    // Validate
 
    if (!validateEmployee(employee)) {
 
        return;
 
    }
 
 
    // Add employee to array
 
    employees = [
        ...employees,
        employee
    ];
 
 
    // Reset filters
 
    currentSearch = "";
 
    currentDepartment = "All";
 
    searchInput.value = "";
 
 
    // Reset department buttons
 
    document
        .querySelectorAll(".department-btn")
        .forEach(button => {
 
            button.classList.remove("active");
 
        });
 
 
    document
        .querySelector(
            '[data-department="All"]'
        )
        .classList.add("active");
 
 
    // Display
 
    displayEmployees(
        employees
    );
 
 
    // Update dashboard
 
    updateDashboard(
        employees
    );
 
 
    // Clear form
 
    clearForm();
 
 
    // Message
 
    showStatus(
        "Employee added successfully.",
        "success"
    );
 
}
 
 
// ==========================================
// DELETE EMPLOYEE
// ==========================================
 
function deleteEmployee(id) {
 
    const employee =
        employees.find(
            employee =>
                employee.id === id
        );
 
 
    if (!employee) {
 
        return;
 
    }
 
 
    const confirmDelete =
        confirm(
            `Are you sure you want to delete ${employee.name}?`
        );
 
 
    if (!confirmDelete) {
 
        return;
 
    }
 
 
    // filter creates a new array
 
    employees =
        employees.filter(
            employee =>
                employee.id !== id
        );
 
 
    // Display updated employees
 
    applyFilters();
 
 
    showStatus(
        "Employee deleted successfully.",
        "success"
    );
 
}
 
 
// ==========================================
// VALIDATE EMPLOYEE
// ==========================================
 
function validateEmployee(employee) {
 
    clearErrors();
 
 
    let isValid = true;
 
 
    // Name validation
 
    if (employee.name === "") {
 
        document.getElementById(
            "nameError"
        ).textContent =
            " Please enter employee name";
 
        isValid = false;
 
    }
 
 
    // Age validation
 
    if (
        !employee.age ||
        employee.age <= 18
    ) {
 
        document.getElementById(
            "ageError"
        ).textContent =
            " Age must be greater than 18";
 
        isValid = false;
 
    }
 
 
    // Email validation
 
    if (employee.email === "") {
 
        document.getElementById(
            "emailError"
        ).textContent =
            " Please enter email";
 
        isValid = false;
 
    }
 
 
    // Email format validation
 
    else if (
        !employee.email.includes("@")
    ) {
 
        document.getElementById(
            "emailError"
        ).textContent =
            " Please enter a valid email";
 
        isValid = false;
 
    }
 
 
    // Department validation
 
    if (employee.department === "") {
 
        document.getElementById(
            "departmentError"
        ).textContent =
            " Please select department";
 
        isValid = false;
 
    }
 
 
    // Salary validation
 
    if (
        !employee.salary ||
        employee.salary <= 0
    ) {
 
        document.getElementById(
            "salaryError"
        ).textContent =
            " Salary must be greater than 0";
 
        isValid = false;
 
    }
 
 
    return isValid;
 
}
 
 
// ==========================================
// CLEAR FORM
// ==========================================
 
function clearForm() {
 
    employeeForm.reset();
 
    clearErrors();
 
}
 
 
// ==========================================
// CLEAR ERRORS
// ==========================================
 
function clearErrors() {
 
    document.getElementById(
        "nameError"
    ).textContent = "";
 
 
    document.getElementById(
        "ageError"
    ).textContent = "";
 
 
    document.getElementById(
        "emailError"
    ).textContent = "";
 
 
    document.getElementById(
        "departmentError"
    ).textContent = "";
 
 
    document.getElementById(
        "salaryError"
    ).textContent = "";
 
     document.getElementById(
        "phoneError"
    ).textContent = "";
 
}
 
 
// ==========================================
// CALCULATE SALARY
// ==========================================
 
function calculateSalary(employeeList) {
 
    // reduce()
 
    const total =
        employeeList.reduce(
            (sum, employee) =>
                sum + employee.salary,
            0
        );
 
 
    const average =
        employeeList.length > 0
            ? total / employeeList.length
            : 0;
 
 
    return {
 
        total: total,
 
        average: average
 
    };
 
}
 
 
// ==========================================
// HIGHEST SALARY
// ==========================================
 
function findHighestSalary(employeeList) {
 
    if (employeeList.length === 0) {
 
        return null;
 
    }
 
 
    const highest =
        employeeList.reduce(
            (highest, employee) => {
 
                return employee.salary >
                    highest.salary
                    ? employee
                    : highest;
 
            }
        );
 
 
    return highest;
 
}
 
 
// ==========================================
// UPDATE DASHBOARD
// ==========================================
 
function updateDashboard(employeeList) {
 
    updateEmployeeCount(
        employeeList.length
    );
 
 
    const salaryData =
        calculateSalary(
            employeeList
        );
 
 
    totalSalary.textContent =
        `₹${salaryData.total.toLocaleString("en-IN")}`;
 
 
    averageSalary.textContent =
        `₹${Math.round(
            salaryData.average
        ).toLocaleString("en-IN")}`;
 
 
    const highest =
        findHighestSalary(
            employeeList
        );
 
 
    if (highest) {
 
        highestSalary.textContent =
            `₹${highest.salary.toLocaleString("en-IN")}`;
 
 
        highestEmployee.innerHTML = `
 
            <div class="highest-card">
 
                <h3>${highest.name}</h3>
 
                <p>
                    Department:
                    ${highest.department}
                </p>
 
                <p>
                    Salary:
                    ₹${highest.salary.toLocaleString("en-IN")}
                </p>
 
            </div>
 
        `;
 
    }
 
    else {
 
        highestSalary.textContent =
            "₹0";
 
 
        highestEmployee.textContent =
            "No employee data available.";
 
    }
 
}
 
 
// ==========================================
// UPDATE EMPLOYEE COUNT
// ==========================================
 
function updateEmployeeCount(count) {
 
    employeeCount.textContent =
        count;
 
 
    displayCount.textContent =
        `${count} employee${count !== 1 ? "s" : ""}`;
 
}
 
 
// ==========================================
// STATUS MESSAGE
// ==========================================
 
function showStatus(message, type) {
 
    statusMessage.textContent =
        message;
 
 
    statusMessage.style.display =
        "block";
 
 
    if (type === "success") {
 
        statusMessage.style.background =
            "#dcfce7";
 
        statusMessage.style.color =
            "#166534";
 
    }
 
 
    else if (type === "error") {
 
        statusMessage.style.background =
            "#fee2e2";
 
        statusMessage.style.color =
            "#991b1b";
 
    }
 
 
    else {
 
        statusMessage.style.background =
            "#dbeafe";
 
        statusMessage.style.color =
            "#1e40af";
 
    }
 
 
    // Hide success/loading message after 3 seconds
 
    if (type !== "loading") {
 
        setTimeout(() => {
 
            statusMessage.style.display =
                "none";
 
        }, 3000);
 
    }
 
}
 
 
// ==========================================
// DATE
// ==========================================
 
function updateDateTime() {
 
    const now =
        new Date();
 
 
    // Date
 
    const date =
        now.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );
 
 
    // Time
 
    const time =
        now.toLocaleTimeString(
            "en-IN",
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );
 
 
    document.getElementById(
        "today"
    ).textContent =
        `Today: ${date}`;
 
 
    document.getElementById(
        "currentTime"
    ).textContent =
        `Time: ${time}`;
 
}
 
 
// ==========================================
// EVENT LISTENERS
// ==========================================
 
 
// Search button
 
searchBtn.addEventListener(
    "click",
    searchEmployees
);
 
 
// Search while typing
 
searchInput.addEventListener(
    "input",
    searchEmployees
);
 
 
// Employee form
 
employeeForm.addEventListener(
    "submit",
    addEmployee
);
 
 
// Sort
 
sortSelect.addEventListener(
    "change",
    applyFilters
);
 
 
// Department buttons
 
document
    .querySelectorAll(".department-btn")
    .forEach(button => {
 
        button.addEventListener(
            "click",
            () => {
 
                // Remove active from all
 
                document
                    .querySelectorAll(
                        ".department-btn"
                    )
                    .forEach(btn => {
 
                        btn.classList.remove(
                            "active"
                        );
 
                    });
 
 
                // Add active to clicked button
 
                button.classList.add(
                    "active"
                );
 
 
                const department =
                    button.dataset.department;
 
 
                filterDepartment(
                    department
                );
 
            }
        );
 
    });
 
 
// ==========================================
// START APPLICATION
// ==========================================
 
fetchEmployees();
 
 
// Update time immediately
 
updateDateTime();
 
 
// Update time every second
 
setInterval(
    updateDateTime,
    1000
);
 