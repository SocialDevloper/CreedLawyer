const person = {
	name : "mitesh",
	age : 22,
	address(){
		var city = "Ahmedabad";
		console.log("Hello, I am " + this.name + 
					" comming From "+ city);
	}
};

person.address();

const Hobbies = ['sports', 'Reading', 'Writing'];

for (let hobby of Hobbies) {
	console.log(hobby);
}

console.log(Hobbies.map(hobby => "Title : " + hobby));

Hobbies.push("Programing");
console.log(Hobbies);


const copyArray = Hobbies.slice();
console.log(copyArray);

// spread operator
const CoppyArray = [...Hobbies];
console.log(CoppyArray);


// rest operator
const toArray = (...args) => {
	return args;
};

console.log(toArray(1,2,3,4));