const bcrypt = require('bcryptjs')
const { find, filter, findAll } = require('lodash')

const resolvers = {
  Query: {
      async skill (root, args, { models }) {
        const skillList =  await models.astabquestionentry.findAll()
        let res =  skillList.filter((el) => (el.qeLessonName === args.LessonName))
        return res
      },
      async question (root, args, { models }) {
        const questions = await models.astabquestionbank.findAll()
        let res =  questions.filter((el) => (el.qbLessonName === args.LessonName))
        //console.log('Questions: ', res)
        return res
      },
      async passage (root, args, { models }) {
        const passages = await models.astabpassagebank.findAll()
        let res =  passages.filter((el) => (el.pbPassageID === args.PassageId))
        return res
      },
      async answer (root, args, { models }) {
        const answers = await models.astabanswerbank.findAll()
        let res =  answers.filter((el) => (el.abQuestionId === args.QuestionId))
        return res
      },
    }
  }
  module.exports = resolvers