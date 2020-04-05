/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('astabpassagebank', {
		pbCurPassage: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'pbCurPassage'
		},
		pbPassageId: {
			type: DataTypes.STRING(100),
			allowNull: true,
			unique: true,
			field: 'pbPassageID',
			primaryKey: true
		},
		pbLessonName: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'pbLessonName'
		},
		pbPassage: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'pbPassage'
		},
		pbPassageNoTag: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'pbPassageNoTag'
		},
		pbRandomField: {
			type: DataTypes.INTEGER(6),
			allowNull: true,
			field: 'pbRandomField'
		},
		pbRandomizeOrNot: {
			type: DataTypes.STRING(5),
			allowNull: true,
			field: 'pbRandomizeOrNot'
		},
		pbSequencer: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1',
			field: 'pbSequencer'
		},
		pbPassageType: {
			type: DataTypes.STRING(5),
			allowNull: true,
			defaultValue: '0',
			field: 'pbPassageType'
		},
		pbBgPallet: {
			type: DataTypes.STRING(200),
			allowNull: true,
			defaultValue: 'ZZZZZZ',
			field: 'pbBgPallet'
		},
		pbSkillCode: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'pbSkillCode'
		}
	}, {
		tableName: 'astabpassagebank',
		timestamps: false,
		freezeTableName: true,
	});
};
