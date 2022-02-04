import images from '@assets/images'

export default class Category{
  constructor(type, title, number, score){
    this.type = type;
    this.title = title;
    this.number = number;
    this.findQuestions = function() {
      if ( this.type === 'artists') {
        switch( +this.number ) {
          case 1: return images.slice(0, 10)
          case 2: return images.slice(10, 20)
          case 3: return images.slice(20, 30)
          case 4: return images.slice(30, 40)
          case 5: return images.slice(40, 50)
          case 6: return images.slice(50, 60)
          case 7: return images.slice(60, 70)
          case 8: return images.slice(70, 80)
          case 9: return images.slice(80, 90)
          case 10: return images.slice(90, 100)
          case 11: return images.slice(100, 110)
          case 12: return images.slice(110, 120)
        }
      }
      if ( this.type === 'pictures') {
        switch( +this.number ) {
          case 1: return images.slice(120, 130)
          case 2: return images.slice(130, 140)
          case 3: return images.slice(140, 150)
          case 4: return images.slice(150, 160)
          case 5: return images.slice(160, 170)
          case 6: return images.slice(170, 180)
          case 7: return images.slice(180, 190)
          case 8: return images.slice(190, 200)
          case 9: return images.slice(200, 210)
          case 10:return images.slice(210, 220)
          case 11:return images.slice(220, 230)
          case 12:return images.slice(230, 240)
        }
      }
    };
    this.arrForQuestions = this.findQuestions()
    this.score = score;
  }
}