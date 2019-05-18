$(document).ready(() => {
	console.log("Hello!");

	$("#submit").click((event) => {
		event.preventDefault();
		let name = $("#name").val().trim();
		let email = $("#email").val().trim();
		let comment = $("#comment").val().trim();

		console.log("Submit has been clicked!");

		if (name === "" || email === "" || comment === "") {
			alert("Please fill out all values!");
			return;
		}

		const newComment = {
			name: name,
			email: email,
			comment: comment,
		}

		console.log("NEW COMMENT", newComment);

		// post comment to api
		$.ajax({
			method: "POST",
			url: "/api/comments",
			data: newComment
		});
	});
});