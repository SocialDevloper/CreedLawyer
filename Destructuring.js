const person = {
	name : 'Mitesh',
	age : 22,
	greet() {
		console.log("Hi I am "+ this.name);
	}
}

const printName = ({name,age}) =>{
	console.log(name,age);
}

printName(person);

const Hobbies = ['sports', 'dancing'];

const [hobby1, hobby2] = Hobbies;

console.log(hobby1,hobby2);