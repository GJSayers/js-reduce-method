  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Grouping by a property, and totaling it too

let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log("Total Experience:", totalExperience);

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  // check if the accumulator key already exists in the object
  if (!acc[key]) {
    // if not, set it equal to the current years experience
    acc[key] = curr.yrsExperience;
    // if the key does exist, add the curr years experience
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});
console.log("Experience by Profession", experienceByProfession);

// Totaling a specific object property explained

const nums = [0, 1, 2, 3, 4]
let sum = nums.reduce((acc, curr) => {
console.log(
  "Accumulator:", acc,
  "Current Value:", curr,
  "Total:", acc + curr,
    
  );
  return acc + curr;
// the item to start accumulating from should be declared - in this case 0:
}, 0);
console.log(sum);

// Totaling a specific object property simplified

let sum2 = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum2);


