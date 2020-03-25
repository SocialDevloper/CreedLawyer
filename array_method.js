let fruits = ['Apple','Banana','Pineapple'];


fruits.forEach(function(item,index,fruits){
console.log(item,index);
});

console.log(fruits.length);

// array method 
// array map

const arr1 = [1,2,3,4,5];

const changeArr = arr1.map(function(index, elem) {
	return index * 2;
});

console.log(changeArr);

//array flatMap

const changeArr1 = arr1.flatMap(key => [key *2 ]);

console.log(changeArr1);

// forEach example

const array1 = [11, 22, 33, 44];

array1.forEach(element => console.log(element * 2));