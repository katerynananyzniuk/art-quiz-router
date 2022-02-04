import images from '@assets/images'

export default class Question{
  constructor(type, category){
    this.type = type;
    this.category = category;
    this.arrForQuestions = category.arrForQuestions
  }
}