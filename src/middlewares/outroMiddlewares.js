module.exports = (res, req, next) => {
	console.log("--------------");
	console.log(
		"Passando pelo último middleware, não sei pq ele n aceitou o req.session, aqui n fica referenciado..."
	);
	// console.log(
	// 	`Do último middleware global, olha o que temos na req.session.sobrenome: ${req.session.sobrenome}`
	// );
	console.log("--------------");
	next();
};
