# Cookie JavaScript
### Что такое куки cookie?
Куки – это небольшие строки данных, которые хранятся непосредственно в браузере. Они являются частью HTTP-протокола, определённого в спецификации "RFC 6265".
___
### Файл для работы с cookie
Для работы с cookie предлагаю использовать файл [cookie.js](https://github.com/MatveevFilipp/JavaScript/tree/master/JS/Cookie/cookie.js)   или [cookie.min.js](https://github.com/MatveevFilipp/JavaScript/tree/master/JS/Cookie/cookie.min.js) с функциями:   
1. **addCookie('ключ(имя)', значение);** - запись в document.cookie
```javascript
addCookie('text', "текст");
addCookie('number', 123);

console.log(document.cookie);
}
```
___
2. **getCookie('ключ(имя)');** - чтения из document.cookie
```javascript
console.log(getCookie('text'));
console.log(getCookie('number'));
}
```
___
3. **deleteCookie('ключ(имя)');** - удаление из document.cookie
```javascript
deleteCookie('text');
deleteCookie('number');
}
```
