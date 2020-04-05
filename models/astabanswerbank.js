/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('astabanswerbank', {
		abAnswerId: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: '',
			primaryKey: true,
			field: 'abAnswerId'
		},
		abQuestionId: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'abQuestionId',
			primaryKey: true
		},
		abAnswer: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'abAnswer'
		},
		abAnswerNoTag: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'abAnswerNoTag'
		},
		abCorrectAnswer: {
			type: DataTypes.STRING(5),
			allowNull: true,
			field: 'abCorrectAnswer'
		},
		abRandomField: {
			type: DataTypes.INTEGER(6),
			allowNull: true,
			field: 'abRandomField'
		},
		abLessonName: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'abLessonName'
		},
		abPlainCorrectAnswer: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'abPlainCorrectAnswer'
		}
	}, {
		tableName: 'astabanswerbank',
		timestamps: false,
		freezeTableName: true,
	});
};
