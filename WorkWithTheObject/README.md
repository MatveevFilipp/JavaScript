# Методы обращения к объектам

### ~~Устаревшие~~

1. **.getElementById();** - по id (только к одному id)  
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
[пример](---)