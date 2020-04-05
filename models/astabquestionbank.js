/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('astabquestionbank', {
		qbCurQ: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'qbCurQ'
		},
		qbQuestionId: {
			type: DataTypes.STRING(100),
			allowNull: true,
			unique: true,
			field: 'qbQuestionId',
			primaryKey: true
		},
		qbQuestion: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'qbQuestion'
		},
		qbQuestionNoTag: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'qbQuestionNoTag'
		},
		qbHints: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'qbHints'
		},
		qbRandomField: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'qbRandomField'
		},
		qbPassageId: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'qbPassageId'
		},
		qbLessonName: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'qbLessonName'
		},
		serialNumber: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			defaultValue: '0',
			field: 'SerialNumber'
		},
		qbsolution: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'qbsolution'
		},
		qbsolutionNoTag: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'qbsolutionNoTag'
		},
		qbHintsNoTag: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'qbHintsNoTag'
		},
		qbLod: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			field: 'qbLOD'
		},
		qbUser: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'qbUser'
		},
		created: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'Created'
		},
		modified: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'Modified'
		}
	}, {
		tableName: 'astabquestionbank',
		timestamps: false,
		freezeTableName: true,
	});
	// astabquestionbank.removeAttribute('id');
};
