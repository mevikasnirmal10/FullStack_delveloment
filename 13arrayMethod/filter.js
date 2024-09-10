//filter

// it filter the values that passes the test cases

let students = [
  { name: "Rinku", course: "Btech", branch: "cse" },
  { name: "Rohit", course: "Btech", branch: "civil" },
  { name: "Virat", course: "Btech", branch: "cse" },
  { name: "Mukesh", course: "Btech", branch: "mechanical" },
  { name: "Akshar", course: "Btech", branch: "civil" },
];

const newArr = students
  .filter((val) => {
    if (val.branch === "civil") {
      return val;
    }
  })
  .map((val) => {
    return val.name + " " + val.course;
  });
console.log(newArr);
