# Методы обращения к объектам

## ~~Устаревшие методы~~

1. **.getElementById();** - по id (только один и самый первый)
```html
<p id="bloc">text</p>
```
```javascript
let elem = document.getElementById('bloc'); /* объект по id */
console.log(elem);
console.dir(elem);
```
2. **.getElementsByName();** - по имени
```html
<p name="bloc">text</p>
```
```javascript
let elem = document.getElementsByName('comment'); /* объект по name */
console.log(elem);
console.dir(elem);
```
3. **.getElementsByClassName();** - по имени класса (создает HTML коллекцию, не массив!)
```html
<p class="bloc">text</p>
```
```javascript
let elem = document.getElementsClassName('bloc'); /* объект по class */
console.log(elem);
console.dir(elem);
```
  
## Новые методы

1. **.querySelector();** - по селектору (только один и самый первый)
```javascript
let elem = document.querySelector('#bloc');
console.log(elem); /* объект */
```
2. **.querySelectorAll();** - по селекторам (создает псевдомассив, указывая в length его длину)
```javascript
let elem = document.querySelectorAll('.blocs');
console.log(elem); /* псевдомассив */

/* изменим текст в кажом блоке с классом blocs. Для этого переберем псевдомассив */
for(let i = 0; i < elem.length; i++){
elem[i].textContent = "Новый текст для блока";
}
```

[querySelector](https://github.com/MatveevFilipp/JavaScript/blob/master/JS/WorkWithTheObject/querySelector.html)
\-
[пример](https://codepen.io/MatveevFilipp/pen/xxGygPd)  
[querySelectorAll](https://github.com/MatveevFilipp/JavaScript/blob/master/JS/WorkWithTheObject/querySelectorAll.html)
\-
[пример](https://codepen.io/MatveevFilipp/pen/MWwPJXy)  
