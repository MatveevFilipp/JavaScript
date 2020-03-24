# Методы обращения к объектам

## ~~Устаревшие методы~~

1. **.getElementById();** - по id (только один и самый первый)
```javascript
let elem = document.getElementById('bloc');
console.log(elem); /* объект */
```
2. **.getElementsByName();** - по имени
```javascript
let elem = document.getElementsByName('comment');
console.log(elem); /* объект */
```
3. **.getElementsClassName();** - по имени класса (создает HTML коллекцию, не массив!)
```javascript
let elem = document.getElementsClassName('bloc');
console.log(elem); /* объект */
```
  
## Новые методы

1. **.querySelector();** - по селектору (только один и самый первый)
```javascript
let elem = document.querySelector('#bloc');
console.log(elem); /* объект */
```
2. **.querySelectorAll();** - по селекторам (создает псевдо массив, указывая в length его длину)
```javascript
let elem = document.querySelectorAll('.blocs');
console.log(elem); /* псевдо массив */

/* изменим текст в кажом блоке с классом blocs. Для этого переберем псевдо массив */
for(let i = 0; i < elem.length; i++){
elem[i].textContent = "Новый текст для блока";
}
```

[querySelector](https://github.com/VipBender/JavaScript/blob/master/JS/WorkWithTheObject/querySelector.html)
\-
[пример](https://codepen.io/VipBender/pen/xxGygPd)  
[querySelectorAll](https://github.com/VipBender/JavaScript/blob/master/JS/WorkWithTheObject/querySelectorAll.html)
\-
[пример](https://codepen.io/VipBender/pen/MWwPJXy)  