// Get Unique Id
function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0;
		const v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}
// console.log("uid: ",uuidv4());

/* const students = [
	{
		id: '67de71e5-0eac-474f-ab51-850ba9b31ed5',
		name: 'Md Al-Amin',
		email: 'alamin@test.com',
	},
	{
		id: 'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e',
		name: 'Akib Ahmed',
		email: 'akib@test.com',
	},
	{
		id: 'ee729e84-a84e-4adf-b32c-4647a7114d5b',
		name: 'Elias Emon',
		email: 'elias@test.com',
	},
]; */


const students = {
	'67de71e5-0eac-474f-ab51-850ba9b31ed5': {
		id: '67de71e5-0eac-474f-ab51-850ba9b31ed5',
		name: 'Md Al-Amin',
		email: 'alamin@test.com',
	},
	'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e': {
		id: 'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e',
		name: 'Akib Ahmed',
		email: 'akib@test.com',
	},
	'ee729e84-a84e-4adf-b32c-4647a7114d5b': {
		id: 'ee729e84-a84e-4adf-b32c-4647a7114d5b',
		name: 'Elias Emon',
		email: 'elias@test.com',
	},
}

// console.log(students);

// Create a New Object O(1)
const std = {
	id: uuidv4(),
	name: 'Feroz Khan',
	email: 'feroz@gmail.com'
}

// **********    Create a New Object O(1)   **************
// **********    Create a New Object O(1)   **************
students[std.id] = std;
// console.log("crate new obj:", students);



//  *****************    Update a object O(1)   **********
//  *****************    Update a object O(1)   **********
const idToBeUpdated = '67de71e5-0eac-474f-ab51-850ba9b31ed5';
const updatedData = {
	name: 'Azizul',
	email: 'azizul@gmail.com'
}

students[idToBeUpdated] ={
	...students[idToBeUpdated],
	...updatedData
}
// console.log('update obj:', students);



// **********   Delete a object O(1)   **********
// **********   Delete a object O(1)   **********
const idToBeDeleted = 'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e';
delete students[idToBeDeleted]
// console.log('Delete:', students);



// ********   Get Anything if you have id or key O(1)   **********
// ********   Get Anything if you have id or key O(1)   **********
console.log(students['ee729e84-a84e-4adf-b32c-4647a7114d5b']);
