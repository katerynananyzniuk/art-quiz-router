import images from '@assets/images'

export default class Category{
  constructor(type, title, number, score){
    this.type = type;
    this.title = title;
    this.number = number;
    this.findQuestions = function() {
      if ( this.type === 'artists') {
        switch( +this.number ) {
          case 1: return images.map(el => el).slice(0, 10)
          case 2: return images.map(el => el).slice(10, 20)
          case 3: return images.map(el => el).slice(20, 30)
          case 4: return images.map(el => el).slice(30, 40)
          case 5: return images.map(el => el).slice(40, 50)
          case 6: return images.map(el => el).slice(50, 60)
          case 7: return images.map(el => el).slice(60, 70)
          case 8: return images.map(el => el).slice(70, 80)
          case 9: return images.map(el => el).slice(80, 90)
          case 10: return images.map(el => el).slice(90, 100)
          case 11: return images.map(el => el).slice(100, 110)
          case 12: return images.map(el => el).slice(110, 120)
        }
      }
      if ( this.type === 'pictures') {
        switch( +this.number ) {
          case 1: return images.map(el => el).slice(120, 130)
          case 2: return images.map(el => el).slice(130, 140)
          case 3: return images.map(el => el).slice(140, 150)
          case 4: return images.map(el => el).slice(150, 160)
          case 5: return images.map(el => el).slice(160, 170)
          case 6: return images.map(el => el).slice(170, 180)
          case 7: return images.map(el => el).slice(180, 190)
          case 8: return images.map(el => el).slice(190, 200)
          case 9: return images.map(el => el).slice(200, 210)
          case 10:return images.map(el => el).slice(210, 220)
          case 11:return images.map(el => el).slice(220, 230)
          case 12:return images.map(el => el).slice(230, 240)
        }
      }
    };
    this.arrForQuestions = this.findQuestions()
    this.score = score;
  }
}