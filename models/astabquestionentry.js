/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('astabquestionentry', {
		qeSubject: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'qeSubject'
		},
		qeActivity: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'qeActivity'
		},
		qeGrade: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'qeGrade'
		},
		qeObjective: {
			type: DataTypes.STRING(200),
			allowNull: true,
			field: 'qeObjective'
		},
		qeSkill: {
			type: DataTypes.STRING(200),
			allowNull: true,
			field: 'qeSkill'
		},
		qeMastery: {
			type: DataTypes.STRING(10),
			allowNull: true,
			field: 'qeMastery'
		},
		qeRetries: {
			type: DataTypes.STRING(10),
			allowNull: true,
			field: 'qeRetries'
		},
		qeRandomQuestion: {
			type: DataTypes.STRING(10),
			allowNull: true,
			field: 'qeRandomQuestion'
		},
		qeInstruction: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'qeInstruction'
		},
		qeDomainName: {
			type: DataTypes.STRING(100),
			allowNull: true,
			defaultValue: 'NONE',
			field: 'qeDomainName'
		},
		qePreRequisite: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'qePreRequisite'
		},
		qeReadyToGo: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'qeReadyToGo'
		},
		qeAttempt: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'qeAttempt'
		},
		qeTotalNumberOfQuestion: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'qeTotalNumberOfQuestion'
		},
		qeSubSkill: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'qeSubSkill'
		},
		qeSubSubSkill: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'qeSubSubSkill'
		},
		qeLessonName: {
			type: DataTypes.STRING(250),
			allowNull: true,
			unique: true,
			field: 'qeLessonName'
		},
		qeSerialNumber: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'qeSerialNumber'
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
		tableName: 'astabquestionentry',
		timestamps: false,
		freezeTableName: true,
	});
};


