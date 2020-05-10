# videoservice  

**Ссылка** - https://lyrklif.github.io/videoservice/  

| название  |  ссылка |
| :------------ | :------------ |
| Главная страница| https://lyrklif.github.io/videoservice/home.html   |
| Главная страница (Телеканалы) | https://lyrklif.github.io/videoservice/home.html#channels  |
| Главная страница с открытой модалкой |https://lyrklif.github.io/videoservice/home.html#authorize  |



**Для запуска проекта:**  
`npm i `  
`gulp`  

**Команды для консоли:**  
Авторизоваться  
`window.globalSiteAuthorize.authorize();`  

Выйти  
`window.globalSiteAuthorize.exit();`  

Показать модальное окно авторизации  
`window.globalModal.show('authorize');`  

Скрыть модальные окна  
`window.globalModal.hide();`  


Перейти во вкладку "Фильмы"  
`window.globalTabs.open('films');`  

Перейти во вкладку "Телеканалы"  
`window.globalTabs.open('channels');`  
