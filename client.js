const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
// for (let i=0; i<employees.length; i++) {
//   console.log(addToEmployeeFile(employees[i]));
// }
for (let employee of employees) {
  console.log(addToEmployeeFile(employee), 'newObject')
}



function addToEmployeeFile (employee){

  let newObject = {
    name: employee.name,
    bonusPercentage: employee.bonusPercentage,
    totalCompensation: employee.totalCompensation,
    totalBonus: calculateBonus(employee),
  }
  return newObject;
}
// console.log(addToEmployeeFile(employee))
function calculateBonus(employee){
  let bonus = 0;
  if (employee.reviewRating <= 2){
    // console.log('You do not get a bonus!');
    bonus = 0;
  } else if ( employee.reviewRating === 3) {
    // console.log(employee.annualSalary * .04);
    bonus = 4;
  } else if ( employee.reviewRating === 4) {
    // console.log(employee.annualSalary * .06);
    bonus = 6;
  } else if ( employee.reviewRating === 5) {
    // console.log(employee.annualSalary * .10);
    bonus = 10;
  }
  if (employee.employeeNumber.length === 4){
    // console.log(employee.annualSalary * .05);
    bonus += 5;
  }
  if (employee.annualSalary > 65000) {
    bonus -= 1;
  }
  if (bonus > 13 ){
    bonus = 13;
  }
  else if (bonus < 0 ){
    bonus = 0;
  }
  return +employee.annualSalary * (bonus / 100)
}
