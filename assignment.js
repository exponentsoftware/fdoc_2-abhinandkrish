{/**1. Using the countries array create the following 
 array of arrays. The country name, the first three letters of the country name
 and the length of the country name. */}

 const countries = [
   'ALBANIA',
   'BOLIVIA',
   'CANADA',
   'DENMARK',
   'ETHIOPIA',
   'FINLAND',
   'GERMANY',
   'HUNGARY',
   'IRELAND',
   'JAPAN',
   'KENYA'
 ]

 let newCountryList =[];
 for(let i in countries) {
   let newArr = [];
   newArr.push(countries[i]);
   newArr.push(countries[i].substring(0,3));
   newArr.push(countries[i].length);
   newCountryList.push(newArr);   
 }

//  console.log(newCountryList);

{/**2.	Write a function which filter users who has  scoresGreaterThan85,  
	Write a function which addUser  to the user array only if the user does not exist.   
	Write a function which addUserSkill which can add skill to a user only if the user exist.   
	Write a function which editUser if the user exist in the users array. */}


const users = [
   {
      name:'Brook', 
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
   },
   {
      name:'Alex', 
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
   }, 
   {
      name:'David', 
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
   }, 
   {
      name:'John', 
      scores:85,
      skills:['HTM'],
      age:25
   },
   {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
   },
   {
      name:'Martha', 
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
   },
   {
      name:'Thomas',
      scores:85,
      skills:['HTM', 'CSS', 'JS'],
      age:20
   }
];
const filterScore = (users, score) => {
   return users.filter((user)=> user.scores >=score)
};
const addUser = (users, userData) => {  
   let checkUser = users.some((user) => user.name === userData.name)
   !checkUser && users.push(userData);
   return users
};
const addUserSkill = (users, skillDetails) => {
   users.map((user) => user.name === skillDetails.name &&
      skillDetails.skills.map((skill)=> !user.skills.includes(skill) &&
         user.skills.push(skill))  )
   return users; 
};
const editUser = (users, userUpdate) => {
   return users.map((user) => user.name === userUpdate.name ? 
      Object.assign(user, { scores: userUpdate.scores, skills: userUpdate.skills, age: userUpdate.age }) : user);
};

let userData = {
   name:'Alvin',
   scores:100,
   skills:['HTM', 'CSS', 'JS'],
   age:24
}
let skillDetails = {
   name:'Thomas',
   skills:['NODEJS', 'JS']
}
let userUpdate = {
   name:'Thomas',
   scores:65,
   skills:['NODEJS', 'JS'],
   age:20
}

// console.log("2.1)",filterScore(users, 85));
// console.log("2.2)",addUser(users, userData));
// console.log("2.3)",addUserSkill(users, skillDetails));
console.log("2.4)",editUser(users, userUpdate));