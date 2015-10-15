//Create another object that has a method called processEmployee. 
//This method takes an employee object, processes it, and outputs it to the DOM.

var Atticus = {
  name: "Atticus", 
  employeeNumber: "2405",
  baseSalary: "47000",
  reviewScore: 3};


var Jem = {
  name: "Jem", 
  employeeNumber: "62347", 
  baseSalary: "63500", 
  reviewScore: 4};

var Boo = {
  name: "Boo", 
  employeeNumber: "11435", 
  baseSalary: "54000", 
  reviewScore: 3};

var Scout = {
  name: "Scout", 
  employeeNumber: "6243", 
  baseSalary: "74750", 
  reviewScore: 5};

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

var getBonus = {
  processEmployee: function(employee){
      employee = calculateSTI(employee);
      newEl = document.createElement('li');
      newText = document.createTextNode(employee);
      newEl.appendChild(newText);
      position.appendChild(newEl);
      return employee;
  }  
}


function calculateSTI(employeeName){
  var employeeBonus = {
    name: "",
    bonusPercentage: "",
    newSalary: "",
    bonusAmount: ""
  };

  employeeBonus.name = employeeName.name;

  var employeeNumber = employeeName.employeeNumber;
  var baseSalary = employeeName.baseSalary;
  var reviewScore = employeeName.reviewScore;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  
  if(bonus > 0.13){
    bonus = 0.13;
  }

  employeeBonus.bonusPercentage = bonus;
  employeeBonus.newSalary = Math.round(baseSalary * (1.0 + bonus));
  employeeBonus.bonusAmount = Math.round(baseSalary * bonus);
  console.log(employeeBonus.name + " " + employeeBonus.bonusPercentage + " " + employeeBonus.newSalary + " " + employeeBonus.bonusAmount);
  employeeBonus = (employeeBonus.name + ": " + employeeBonus.bonusPercentage + ", " + employeeBonus.newSalary + ", " + employeeBonus.bonusAmount);
  return employeeBonus;
}


function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

//basePercent - 1

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}


getBonus.processEmployee(Atticus);
getBonus.processEmployee(Jem);
getBonus.processEmployee(Boo);
getBonus.processEmployee(Scout);


