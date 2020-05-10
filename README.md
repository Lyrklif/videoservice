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
| команда  |  описание |
| :------------ | :------------ |
| `window.globalSiteAuthorize.authorize();`  | Авторизоваться |
| `window.globalSiteAuthorize.exit();` | Выйти |
| `window.globalModal.show('authorize');` | Показать модальное окно авторизации |
| `window.globalModal.hide();` | Скрыть модальные окна |
| `window.globalTabs.open('films');` | Перейти во вкладку "Фильмы" |
| `window.globalTabs.open('channels');` | Перейти во вкладку "Телеканалы" |
