# videoservice  
Тестовое задание по направлению Frontend D1  

**Ссылка - https://lyrklif.github.io/videoservice/**   

| название  |  ссылка |
| :------------ | :------------ |
| Главная с актуальными данными по фильмам | https://lyrklif.github.io/videoservice/home-actual.html   |
| Главная | https://lyrklif.github.io/videoservice/home.html   |
| Главная (Телеканалы) | https://lyrklif.github.io/videoservice/home.html#channels  |
| Главная с открытой модалкой |https://lyrklif.github.io/videoservice/home.html#authorize  |



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

## Описание тестового задания
**Что нужно сделать**
1. Реализовать переключение между табами;
2. Реализовать кастомный скроллбар;
3. Реализовать возможность изменения имени пользователя:
- При клике на имени пользователя вместо текущего значения должно
появляться поле ввода;
- При этом в поле ввода должно сразу подставляться текущее значение;
- После снятия фокуса с поля ввода значение должно сохраняться на странице;
- Имя пользователя должно сохраняться при перезагрузке страницы.
