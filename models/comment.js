// model for comment posted to our db
module.exports = (sequelize, DataTypes) => {
	let Comment = sequelize.define("Comment", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		comment: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1]
			}
		}
	});
	return Comment;
};