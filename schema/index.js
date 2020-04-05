const { gql } = require('apollo-server')

const typeDefs = gql`
    type Skill {
        qeSerialNumber: Int!
        qeLessonName: String!
        qeSubject: String!
        qeGrade: String!
        qeDomainName:String
        qeObjective:String 
        qeSkill: String
        qeSubSkill: String 
        qeSubSubSkill: String
        questions: [Question]
      }
    type Question {
        qbCurQ: String
        qbQuestionId: String
        qbQuestion: String
        qbQuestionNoTag: String
        qbHints: String
        qbRandomField: String
        qbPassageId: String
        qbLessonName: String
        SerialNumber: Int
        qbsolution: String
        qbsolutionNoTag: String
        qbHintsNoTag: String
    }
    type Passage {
      pbCurPassage: Int!
      pbPassageID: String
      pbLessonName: String
      pbPassage: String
      pbRandomField: Int
      pbRandomizeOrNot: String
      pbSequencer: Int
      pbPassageType: String
      pbBgPallet: String
      pbSkillCode: String
    }
    type Answer {
      abAnswerId: String!
      abQuestionId: String
      abAnswer: String
      abCorrectAnswer: String
      abRandomField: Int
      abLessonName: String
      abPlainCorrectAnswer: String
    }
      type Query {
        skill(LessonName: String!): [Skill]
        question(LessonName: String!): [Question]
        passage(PassageId: String!): [Passage]
        answer(QuestionId: String): [Answer]
    }`

module.exports = typeDefs
