$(document).ready(() => {
	console.log("Hello!");

	$("#submit").click((event) => {
		event.preventDefault();
		let name = $("#name").val().trim();
		let email = $("#email").val().trim();
		let question = $("#question").val().trim();

		console.log("Submit has been clicked!")

		console.log("name", name);
		console.log("email", email);
		console.log("question", question);
	});
});