import images from '@assets/images'

export default class Question{
  constructor(type, category){
    this.type = type;
    this.category = category;
    this.arrForQuestions = category.arrForQuestions
    this.findAnswers = function() {
      if (this.type === 'artists') {
        return this.arrForQuestions.map(el => el.author)
      }
      else if (this.type === 'pictures') {
        return this.arrForQuestions.map(el => el.name)
      }
    }
    this.findQuestions = function() {
      if (this.type === 'artists') {
        return this.arrForQuestions.map(el => el.name)
      }
      else if (this.type === 'pictures') {
        return this.arrForQuestions.map(el => el.author)
      }
    }
    this.questions = this.findQuestions()
    this.answers = this.findAnswers()
  }
}