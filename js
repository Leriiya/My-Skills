let numbers = [1, 2, 3, 4];
console.log(numbers.length); // Выведет: 4
С помощью обращения к length можно получить последний элемент массива, даже если вы не знаете, сколько элементов в нём хранится:

someBigArray[someBigArray.length - 1];
/////
let expectedUsers = 1000;

let usersByDay = [817, 1370, 752, 1247, 681, 1120, 915, 1281, 875, 1341, 757, 610, 812, 1170, 769, 1261, 845, 1289, 515, 1247, 845, 1311, 741, 1239, 812, 638, 877, 1242, 1159, 1372];

// Рисуем график посещаемости
keks.plot(usersByDay, expectedUsers);

// Суммируем посещаемость
let totalUsers = 0;
for (let i = 0; i <= usersByDay.length - 1; i++) {
  totalUsers += usersByDay[i];
}

// Рассчитываем среднее значение посещаемости
let averageUsers = totalUsers / usersByDay.length;
console.log('Средняя посещаемость: ' + averageUsers);

if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}////
/////////////////////

НАХОДИМ МИНИМАЛЬНОЕ ЗНАЧЕНИЕ 
let usersByDay = [4, 2, 1, 3];
console.log(usersByDay);

let currentIndex = 0;
let minValue = usersByDay[currentIndex];

for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if (usersByDay[j] < minValue) {
    minValue = usersByDay[j];
    console.log('Новый минимальный элемент: ' + minValue);
    } 
    
}
console.log('Минимальный элемент: ' + minValue); [4, 2, 1, 3] (Array)
//Новый минимальный элемент: 2 (String)
//Новый минимальный элемент: 1 (String)
//Минимальный элемент: 1 (String)



/////////////////////
СОРТИРУЕМ ОТ МИНИМАЛЬНОГО ДО МАКСИМАЛЬНОГО ЗНАЧЕНИЯ И ВЫВОДИМ
let usersByDay = [4, 2, 1, 3];
console.log(usersByDay);

for (let i = 0; i <= usersByDay.length - 2; i++) {
  let minValue = usersByDay[i];

  for (let j = i + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      let swap = usersByDay[i];
      usersByDay[i] = minValue;
      usersByDay[j] = swap;
    }
  }
}
console.log(usersByDay);   ///[4, 2, 1, 3] (Array)  ------> [1, 2, 3, 4] (Array)


//////МЕДИАНА НА НЕЧЕТНОМ КОЛ-ВЕ ЭЛЕМЕНТОВ
let usersByDay = [1, 2, 3, 4, 5];
console.log(usersByDay);
let median;
if (usersByDay.length % 2 !== 0) {
  let medianIndex = (usersByDay.length - 1) / 2;
  console.log(medianIndex);
  median = usersByDay[medianIndex];
  console.log(median);
  } 



//////МЕДИАНА НА ЧЕТНОМ КОЛ-ВЕ ЭЛЕМЕНТОВ
let usersByDay = [1, 2, 3, 4, 5, 6];
console.log(usersByDay);
let median;

if (usersByDay.length % 2 !== 0) {
  let medianIndex = (usersByDay.length - 1) / 2;
  console.log(medianIndex);
  median = usersByDay[medianIndex];
  console.log(median);
  
} else {let leftIndex = usersByDay.length / 2 - 1;
  let rightIndex = usersByDay.length / 2;
  console.log(leftIndex);
  console.log(rightIndex);
  median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
  console.log(median);
}



pop()  удаляет последний элемент массива
shift() удаляет первый элемент массива
splice(2, 4) удаляет со 2 эл массива 4 штуки
slice(1, 2) опирует или извлекает заданное количество элементов в новый массив, оставляя массив нетронутым
индекс, с которого следует начать извлечение и индекс, с которого следует остановить извлечение
push() добавляет новый массив в конец
unshift() добавляет новый массив в начало массива
hasOwnProperty() ищет данные, если есть - true
Math.random()
Object.freeze() предотвращает функцию от изменений
indexOf() проверяет наличие элемента в массиве
.endsWith(р) проверяет р есть ли в конце слова
Math.ceil(number) — округляет его до целого в большую сторону
Math.floor(number) — округляет в меньшую сторону.
Math.round(number) — округляет число до ближайшего целого значения.

Array.isArray() проверяет массив или нет тру фолс


users.hasOwnProperty('Alan');
'Alan' in users;
Оба они вернутся true.

////сокращенный вариант if else
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch(val) {
  case "a":
   answer = "apple";
   break;
  case "b":
   answer = "bird";
   break;
  case "c":
   answer = "cat";
   break;
   default:
   answer = "stuff";
   break;
}


switch(val) {
  case 1:
  case 2:
  case 3:
   answer = "Low";
   break;
  case 4:
  case 5:
  case 6:
   answer = "Mid";
   break;
  case 7:
  case 8:
  case 9:
   answer = "High";
}

////
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
} 
 
*******
function isEqual(a, b) {
  return a === b;
}///////////////

function randomRange(myMin, myMax) {
  // Only change code below this line
let result = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  return result;
  // Only change code above this line
} console.log(randomRange(10, 19))



-------------------------
const myFunc = () => {
  const myVar = "value";
  return myVar;
}    
----------------------------
const myFunc = () => "value";
----------------------------

const doubler = (item) => item * 2;
doubler(4); --------------- ответ 8
--------------------------------

const doubler = item => item * 2;
----------------------------------
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
-----------------------------------------------
++++++++++++++++++++++++++++++++++++++++++++++++
const sum = (...args) => {
  
  return args.reduce((a, b) => a + b, 0);
} 
console.log(sum(0, 2, 3, 4)); ------ответ 9
++++++++++++++++++++++++++++++++++++++++++++++

let numbers = [-12, 160, 0, -3, 51];
let minNum = Math.min(...numbers);
console.log(minNum); //-12

_____________________________________________
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
------------------------------------
const { name, age } = user;
______________________________________________


const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
=============================
const { johnDoe: { age, email }} = user;
=============================
const { johnDoe: { age: userAge, email: userEmail }} = user;
............................................................

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers); //[ 10, 11, 12, 13, 14, 15 ]
////////////////////////////////////////////////////////////////

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line

  console.log(foods); // { apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27 } 

  
  <script>$(document).ready(function() {
    $("button").addClass("animated bounce") //подпрыгивание
    $("button")
    $(".btn")
    $("#target1")
    $("button").removeClass("btn-default")
    $("#target1").css("color", "red")
    $("#target1").prop("disabled", true) //отключение кнопки
    $("#target4").html("<em>#target4</em>") //курсивом
    $("#target4").remove() //удаление элемента
    $("#target2").appendTo("#right-well") //перемещение одного элемента в другое место
    $("#target2").clone().appendTo("#right-well"); //копировать элем из одного места в другое
    $("#target1").parent().css("background-color", "red")
    $(".target:nth-child(3)").addClass("animated bounce");//эффект только для третьего эл
   });</script>

   //sass
   @mixin border-stroke($val) {
   @if $val == light {
     border: 1px solid black;
   }
   @else if $val == medium {
     border: 3px solid black;
   }
   @else if $val == heavy {
     border: 6px solid black;
   } @else {
     border: none;
    }
   
 }

 <style type='text/scss'>
@for $j from 1 to 6 {
  .text-#{$j} { font-size: 15px*$j }
}
</style>
<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p> хэлоу все больше и больше 

///////////////
<style type='text/scss'>
$x: 1;
@while $x <= 5 {
  .text-#{$x} { font-size: 15px * $x}
  $x: $x + 1;
}
</style> //// размер хэлоу с каждым разом умножен на 15

.big-panel{
  @extend .panel; //тут стили из panel
  width: 150px;
  font-size: 2em;
} 

REACT
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
return (
  <div>
    <h1>Hello React!</h1>
  </div>
)


    // Change code above this line
  }
};

//////////////////////////
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  } 
  render () {
  return (
    <div>
      <h1>My First React Component!</h1>
    </div>
  )
  }
}
ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
///////////////////////////////////////////////

// Когда ищем элемент по классу, используем точку
var product = document.querySelector('.product');

// Но когда добавляем класс, точки нет!
product.classList.add('product--sale');

// Ищем все элементы
var elements = document.querySelectorAll('.product');

// Создать элемент
var card = document.createElement('li'); 

//
var catalogData = [
  {
    isAvailable: true,
    isSpecial: false
  },
  {
    isAvailable: false,
    isSpecial: false
  },
  {
    isAvailable: true,
    isSpecial: true
  },
  {
    isAvailable: true,
    isSpecial: false
  },
  {
    isAvailable: false,
    isSpecial: false
  }
];

var updateCards = function (products) {
  var elements = document.querySelectorAll('.product');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    var product = products[i];
    
    var availabilityClass = 'product--available';
    if (!product.isAvailable) {
      availabilityClass = 'product--unavailable';
    }

    element.classList.add(availabilityClass);

    if (product.isSpecial) {
      element.classList.add('product--special')      
    }
    
  }
};

updateCards(catalogData);

//////
var cardList = document.querySelector('.products'); //нашли в кард лист продактс
console.log(cardList.children);

var listItem = document.createElement('li'); // создали li в переменную listItem
listItem.classList.add('product'); // добавили ему класс product
cardList.appendChild(listItem); // добавили listItem в конец списка товаров
console.log(cardList.children); // проверили содержимое

var title = document.createElement('h2');
title.classList.add('product__title');
title.textContent = 'Профессиональная селфи-палка';
listItem.appendChild(title); // создайте и запишите в переменную price DOM-элемент p с классом 
; // product__price и текстом '1000'. Затем вставьте price в конец listItem.

picture.src = 'device/item-4.jpg';
picture.alt = 'Профессиональная селфи-палка';
listItem.appendChild(picture); // Добавление картинки
element.cloneNode(false); // Вернёт склонированный элемент без вложенностей

var cardsData = [
  {
    isAvailable: true,
    imgUrl: 'device/item-1.jpg',
    text: 'Селфи-палка для начинающих',
    price: 200,
    isSpecial: false
  },
  {
    isAvailable: false,
    imgUrl: 'device/item-2.jpg',
    text: 'Профессиональная селфи-палка',
    price: 1500,
    isSpecial: false
  },
  {
    isAvailable: true,
    imgUrl: 'device/item-3.jpg',
    text: 'Непотопляемая селфи-палка',
    price: 2500,
    isSpecial: false
  },
  {
    isAvailable: true,
    imgUrl: 'device/item-4.jpg',
    text: 'Селфи-палка «Следуй за мной»',
    price: 4900,
    isSpecial: true,
    specialPrice: 100
  }
];

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createCard = function (product) {
  var listItem = makeElement('li', 'product');

  var title = makeElement('h2', 'product__title', product.text);
  listItem.appendChild(title);

  var picture = makeElement('img', 'product__image');
  picture.src = product.imgUrl;
  picture.alt = product.text;
  listItem.appendChild(picture);

  var price = makeElement('p', 'product__price', product.price);
  listItem.appendChild(price);

  var availabilityClass = 'product--available';
  if (!product.isAvailable) {
    availabilityClass = 'product--unavailable';
  }
  listItem.classList.add(availabilityClass);

  if (product.isSpecial) {
    listItem.classList.add('product--special');
    var specialPrice = makeElement('p', 'product__special-price', product.specialPrice);
    listItem.appendChild(specialPrice);
  }

  return listItem;
};

  var cardList = document.querySelector('.products');

  for (var i = 0; i< cardsData.length; i++) {
    var cardItem = createCard(cardsData[i]);
    cardList.appendChild(cardItem); // задача с картинками
    }
  
  

//////////////////////////////////////////////////////////////////////

  var cardsData = [
  {
    inStock: true,
    imgUrl: 'gllacy/choco.jpg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 310,
    isHit: true,
    specialOffer: 'Двойная порция сиропа бесплатно!'
  },
  {
    inStock: false,
    imgUrl: 'gllacy/lemon.jpg',
    text: 'Сливочно-лимонное с карамельной присыпкой',
    price: 125,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cowberry.jpg',
    text: 'Сливочное с брусничным джемом',
    price: 170,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cookie.jpg',
    text: 'Сливочное с кусочками печенья',
    price: 250,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/creme-brulee.jpg',
    text: 'Сливочное крем-брюле',
    price: 190,
    isHit: false
  }
];
var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var renderCards = function(good) {
  var listItem = makeElement('li', 'good');
  var title = makeElement('h2', 'good__description', good.text);
  listItem.appendChild(title);
  
  var picture = makeElement('img', 'good__image');
  picture.src = good.imgUrl;
  picture.alt = picture.text;
  listItem.appendChild(picture);
  
  var price = makeElement('p', 'good__price', good.price);
  listItem.appendChild(price);
  
  var availabilityClass = 'good--available';
  if(!good.inStock) {
    availabilityClass = 'good--unavailable';
    }
    listItem.classList.add(availabilityClass);
    
    if (good.isHit) {
      listItem.classList.add('good--hit');
      var specialPrice = makeElement('p', 'good__special-offer', good.specialOffer);
      listItem.appendChild(specialPrice);
      }
      return listItem;
  }
  var cardList = document.querySelector('.products');

for (var i = 0; i< cardsData.length; i++) {
  var cardItem = renderCards(cardsData[i]);
  cardList.appendChild(cardItem); 
  }
;//////////////////////////////////////////////////////////////////////////

  

var popup = document.querySelector('.modal');
var openPopupButton = document.querySelector('.button-open');
var closePopupButton = popup.querySelector('.button-close');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();;// Отменяем действие по умолчанию
  popup.classList.add('modal--show');// Добавляем инструкции для события клика
});
closePopupButton.addEventListener('click', function() {
  popup.classList.remove('modal--show'); //Закрываем вылезшее окошко
  });
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) { ;// Проверяем какая это кнопка
    popup.classList.remove('modal--show'); // При нажатии убираем окно
  }
});

;//////////////////////////////////////////////////////////////////////////////

var photos = [
  'gallery/laptop-large.jpg',
  'gallery/microphone-large.jpg',
  'gallery/keyboard-large.jpg',
  'gallery/signboard-large.jpg',
  'gallery/tree-large.jpg'
];


var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.full-photo');

var addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = photo;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i]);
}
;///////////////////////////////////////////////////////////////////////////////

// Контейнер для карточек
var pool = document.querySelector('.pool');

// Получаем шаблон карточки
var template = document.querySelector('#element-template').content;
var element = template.querySelector('div');

// Клонируем элемент
 var clonedElement = element.cloneNode(false);
 console.log(clonedElement);
 pool.appendChild(clonedElement);
 ;//////////////////////////////////////////////////////////////////////////////
 