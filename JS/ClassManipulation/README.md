# Манипуляция с классами

## ~~Устаревшие методы~~

1. **.className** - редактировать напрямую
```javascript
/* добавим элементу с классом 'bloc' ещё один класс 'bloc2' */
let elem = document.querySelector('.bloc');
elem.className += ' bloc2';
```