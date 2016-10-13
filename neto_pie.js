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


function cookApplePie(needApple, needFlour, needMilk, needEggs){
  // Печем яблочный пироги:
  if (apples - needApple < 0) {
    console.log('Кончились яблоки! Купили еще 10 кг')
    apples += 10;
  }

  checkCommonProducs(needFlour, needMilk, needEggs);

  apples -= needApple
  flour -= needFlour
  milk -= needMilk
  eggs -= needEggs
  applePie++
  console.log('Яблочный пирог   ' +applePie+ ' готов!');
}


function cookStarwberryPie(needStrawberry, needFlour, needMilk, needEggs) {
  // Печем клубничные пироги:
  if (strawberry - needStrawberry < 0) {
    console.log('Кончилась клубника! Купили еще 10 кг')
    strawberry += 10;
  }

  checkCommonProducs(needFlour, needMilk, needEggs);

  strawberry -= needStrawberry;
  flour -= needFlour;
  milk -= needMilk;
  eggs -= needEggs;
  strawberryPie++
  console.log('Клубничный пирог '+strawberryPie+' готов!');
}


function cookApricotPie(needApricot, needFlour, needMilk, needEggs) {
  // Печем абрикосовые пироги:
  if (apricot - needApricot < 0) {
    console.log('Кончились абрикосы! Купили еще 10 кг')
    apricot += 10;
  }

  checkCommonProducs(needFlour, needMilk, needEggs);

  apricot -= needApricot
  flour -= needFlour
  milk -= needMilk
  eggs -= needEggs
  apricotPie++
  console.log('Абрикосовый пирог '+apricotPie+' готов!');

}

function checkCommonProducs(needFlour, needMilk, needEggs) {
   if (flour - needFlour < 0) {
    console.log('Кончилась мука! Купили еще 10 кг')
    flour += 10;
  } else if (milk - needMilk < 0) {
    console.log('Кончилось молоко! Купили еще 10 литров')
    milk += 10;
  } else if (eggs - needEggs < 0) {
    console.log('Кончились яйца! Купили еще 10 штук')
    eggs += 10;
  }
}

for( var i = 0; i < 10; i++ ) {
  cookApplePie(3,2,1,3); // Яблочный пирог (3 кг яблок, 2 кг. муки, 1 литр молока, 3 яйца)
  cookStarwberryPie(5,1,2,4); // Клубничный пирог (5 кг клубники, 1 кг. муки, 2 литр молока, 4 яйца)
  cookApricotPie(2,3,2,2); // Абрикосовый пирог (2 кг абрикос, 3 кг. муки, 2 литр молока, 2 яйца)
}
