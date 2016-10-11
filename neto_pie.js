// Сегодня мы печем пироги!

// Вам нужно испечь по 10 пирогов каждого типа
// Можно использовать все знания, которые вы получили на наших лекциях

// Рецепты:
// Яблочный пирог (3 кг яблок, 2 кг. муки, 1 литр молока, 3 яйца)
// Клубничный пирог (5 кг клубники, 1 кг. муки, 2 литр молока, 4 яйца)
// Абрикосовый пирог (2 кг абрикос, 3 кг. муки, 2 литр молока, 2 яйца)

// Запасы на складе
var apples = 20; // Яблоки, кг
var strawberry = 20; // Клубника - 75 р/кг
var apricot = 20; // Абрикос - 35 р/кг
var flour = 20; // Мука - 10 р/кг
var milk = 20; // Молоко - 15 р/литр
var eggs = 50; // Яйца - 3 р/шт
var applePie = 0; // количество яблочных пирогов, которое испекли.
var strawberryPie = 0; // количество клубничных пирогов, которое испекли.
var apricotPie = 0; // количество абрикосовых пирогов, которое испекли.

function checkProducs() {

  if (apples - 3 < 0) {
    console.log('Кончились яблоки! Купили еще 10 кг')
    apples += 10;
  }

  if (strawberry - 5 < 0) {
    console.log('Кончилась клубника! Купили еще 10 кг')
    strawberry += 10;
  }

  if (apricot - 2 < 0) {
    console.log('Кончились абрикосы! Купили еще 10 кг')
    apricot += 10;
  }

  if (flour - 2 < 0) {
    console.log('Кончилась мука! Купили еще 10 кг')
    flour += 10;
  }

  if (milk - 1 < 0) {
    console.log('Кончилось молоко! Купили еще 10 литров')
    milk += 10;
  }

  if (eggs - 3 < 0) {
    console.log('Кончились яйца! Купили еще 10 штук')
    eggs += 10;
  }
}

function cookApplePie(){
  // Печем яблочный пироги:
  checkProducs();
  apples -= 3;
  flour -= 2;
  milk -= 1;
  eggs -= 3;
  applePie++;
  console.log('Яблочный пирог   ' +applePie+ ' готов!');
}


function cookStarwberryPie() {
  // Печем клубничные пироги:
  checkProducs();
  strawberry -= 5;
  flour -= 1;
  milk -= 2;
  eggs -= 4;
  strawberryPie++;
  console.log('Клубничный пирог '+strawberryPie+' готов!');
}


function cookApricotPie() {
  // Печем абрикосовые пироги:
  checkProducs();
  apricot -= 2;
  flour -= 3;
  milk -= 2;
  eggs -= 2;
  apricotPie++;
  console.log('Абрикосовый пирог '+apricotPie+' готов!');
}

for( var i = 0; i < 10; i++ ) {
  cookApplePie();
  cookStarwberryPie();
  cookApricotPie();
}
