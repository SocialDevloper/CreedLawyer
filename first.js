let name = "mitesh";
let age = 22;
let hobby = true;


const userDetails = (name,age,hobby) =>
{
	return "Name is "+ name +
	       " Age is "+ age +
	       " Hobby is " + hobby;
}

console.log(userDetails(name,age,hobby));

const oranges = ['orange', 'orange']
const apples = ['just one apple']
oranges.forEach(fruit => {
  console.count(fruit)
});
apples.forEach(fruit => {
  console.count(fruit)
});