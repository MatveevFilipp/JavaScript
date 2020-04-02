# Условный оператор if

Условный оператор имеет несколько синтаксисов:  

if ( *условие* ){  
&nbsp;&nbsp;операции, если условие true;  
}  
```javascript
if ( a > 0 ){
    console.log("a больше 0"); 
}  
```
____
if ( *условие* ){  
&nbsp;&nbsp;*условие true;*  
}else{  
&nbsp;&nbsp;*условие false;*  
}
```javascript
if ( a > 0 ){
    console.log("a больше 0");
}else{
    console.log("a меньше или равна 0");
}
```
____
if ( *условие-1* ){  
&nbsp;&nbsp;*условие-1 true;*  
}else if( *условие-2* ){  
&nbsp;&nbsp;*условие-1 false;*  
&nbsp;&nbsp;*условие-2 true;*  
}else if( *условие-3* ){  
&nbsp;&nbsp;*условие-1 false;*  
&nbsp;&nbsp;*условие-2 false;*  
&nbsp;&nbsp;*условие-3 true;*  
}else{  
&nbsp;&nbsp;*условие-1 false;*  
&nbsp;&nbsp;*условие-2 false;*  
&nbsp;&nbsp;*условие-3 false;*  
}
```javascript
if ( a == 0 ){
    console.log("a равно 0");
}else if ( a == 5 ){
    console.log("a равно 5");
}else if ( a > 0 ){
    console.log("a положительное");
}else {
    console.log("a отрицательное");
}
```
____
( *условие* )(  *условие true*  ):( *условие false* );
```javascript
( a > 0  )?( console.log("a больше 0") ):( console.log("a меньше или равна 0") );
```
____
#### Таблица истинности
оператор if проверяет наше условие на верность (1) и

|  |  |
|:---:|:---:|
| Важные | /* !важные */ |