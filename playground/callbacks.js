let getUser = (id, callback) => {
	let user = {
		id: id,
		name: 'Shubham'
	};

	setTimeout(() => {
		callback(user);
	},3000);
};

getUser(24, (userObject) => {
	console.log(userObject);
});