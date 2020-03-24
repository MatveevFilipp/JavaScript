# Манипуляция с классами

## ~~Устаревший метод~~

1. **.className** - редактировать напрямую
```javascript
/* добавим элементу с классом 'bloc' ещё один класс 'bloc2' */
let elem = document.querySelector('.bloc');
elem.className += ' bloc2';
```

## Новыей метод

1. **.classList** - псевдомассив классов
* **.add** - добавление
```javascript
/* добавим элементу с классом 'bloc' ещё один класс 'bloc2' */
let elem = document.querySelector('.bloc');
elem.classList.add('bloc2');
```  
* **.remove** - удаление
```javascript
/* удалим класс 'bloc2' у элемента с классами 'bloc' и 'bloc2' */
let elem = document.querySelector('.bloc');
elem.classList.remove('bloc2');
```
* **.toggle** - автоматически (если класса нет добавит/ если класс есть удалит)
```javascript
/* добавим, удалим, добавим элементу с классом 'bloc' ещё один класс 'bloc2' */
let elem = document.querySelector('.bloc');
elem.classList.toggle('bloc2'); /* добавит */
elem.classList.toggle('bloc2'); /* удалит */wi
elem.classList.toggle('bloc2'); /* добавит */
```

[Анимация тени](https://github.com/VipBender/JavaScript/blob/master/JS/ClassManipulation/ShadowAnimation.html)
\-
[пример](https://codepen.io/VipBender/pen/RwPegoM)  