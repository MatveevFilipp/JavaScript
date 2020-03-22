# Мои настройки brackets  

### скачиваем
[brackets.io](brackets.io)  

### настройка 'Файл -> Менеджер расширений'
+ Autosave Files on Window Blur - автосохранение  
Marty Penner <penner.marty@gmail.com>
+ Beautify - приятный вид файла (Ctrl+Shift+L)  
Drew Hamlett <i@drewh.me> (https://github.com/drewhamlett)
+ Brackets Git - интеграция Git  
Martin Zagora
+ Brackets Icons - значки для дерева файлов  
Ivo Gabe de Wolff (https://github.com/ivogabe)
+ brackets-eslint - добавляет поддержку ESLint / убирает ошибки новых возможностей js  
François de Campredon <francois.de.campredon@gmail.com> (https://github.com/fdecampredon/)
+ Emmet - быстрая работа с HTML и CSS  
Sergey Chikuyonok <serge.che@gmail.com> (https://github.com/sergeche)
+ JS CSS Minifier - минимизировать файл (Ctrl+Alt+M)  
Andrew Bagshaw
+ SVG Preview - просмотр SVG-файлов  
+ Tomorrow Night - тема  
Ryan Stewart <rstewart@adobe.com> (http://github.com/ryanstewart)  

### настройка 'Вид'
✓ Themes...  
  \- Current Theme: Tomorrow Night  
  \- Use Thema Scrollbars: ✓  
  \- Font Size: 14px  
  \- Font Famili: Consolas  
✓ No split  
✓ Automatically close search  
✓ Подсвечивать активную строку  
✓ Номера строк  
✓ Заворачивать строки  
✓ Анализировать при сохранении  
✓ Show secondary icons
✓ Ionicons  

### настройка 'Отладка -> Открыть файл настроек'
[brackets.json](https://github.com/VipBender/JavaScript/blob/master/Brackets/brackets.json)

# Полезно  

### основы emmet 
#### изменение emmet шаблона (!+tab)
1. ищем файл [snippets.json](https://github.com/VipBender/JavaScript/blob/master/Brackets/snippets.json) по пути C:\Users\**user**\AppData\Roaming\Brackets\extensions\user\brackets-emmet\node_modules\emmet\lib
2. изменяем в нем:  
"lang": "en",  
"locale": "en-EN",  
"doc": "html>(head>meta[charset=${charset}]+title{${1:Document}})+body",  
на свой код:  
"lang": "ru",  
"locale": "ru-RU",  
"doc": "html>(head>meta[charset=${charset}]+title{${1:Document}}+link)+body+script:src",
#### комбинации
!+tab -> 