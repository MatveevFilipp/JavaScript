# Циклы 

### Цикл **for**  

for(*задание переменной*; *условие*; *действие*){  
    /* тело цикла */  
};
```javascript
/* вывод в консоль i от 0 до 9 */
for(let i = 0; i < 10; i++){
    console.log(i);
};
```
[**Вывод переменной через for**](https://github.com/MatveevFilipp/JavaScript/blob/master/JS/Cycle/CycleFor.html)
\-
[пример](https://codepen.io/MatveevFilipp/pen/bGdQKqW)  

### Цикл **while**  

while(*условие*){  
    /* тело цикла */  
};
```javascript
/* вывод в консоль i от 0 до 9 */
let i = 0;
while(i < 10){  
    console.log(i);
    i++;
};
```
[**Вывод переменной через while**](https://github.com/MatveevFilipp/JavaScript/blob/master/JS/Cycle/CycleWhile.html)
\-
[пример](https://codepen.io/MatveevFilipp/pen/oNXQypN)  

### Цикл **do while**  

do{  
    /* тело цикла */  
}while(*условие*);
```javascript
/* вывод в консоль i от 0 до 9 */
let i = 0;
do{
    document.write(i + " ");
    i++;
}while(i < 10);
```
[**Вывод переменной через do while**](https://github.com/MatveevFilipp/JavaScript/blob/master/JS/Cycle/CycleDoWhile.html)
\-
[пример](https://codepen.io/MatveevFilipp/pen/YzXRvJq)  