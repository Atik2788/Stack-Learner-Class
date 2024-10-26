const operations = [
	{
		args: [10, 20],
		params: ['a', 'b'],
		body: 'console.log("a + b =",a + b)',
	},
	{
		args: [10, 20],
		params: ['a', 'b'],
		body: 'console.log("a - b =",a - b)',
	},
	{
		args: [10, 20],
		params: ['a', 'b'],
		body: 'console.log("a * b =",a * b)',
	},
];

operations.forEach((operation) => {
    const fn = new Function(...operation.params, operation.body)
    return fn(...operation.args)
})

