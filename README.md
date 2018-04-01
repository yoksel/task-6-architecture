Решение состоит из диспетчера (Dispatcher.js), хранилища (Store.js), логирования (Log.js) и наблюдателя (Observer.js).
Диспетчер и хранилище наследуются от наблюдателя.

Изначальные события задаются в MyStore, который расширяет класс хранилища и переопределяет некоторые его методы.
События приложения обрабатываются контроллером, который также наследуются от наблюдателя.

События из приложения попадают в контроллер, оттуда в диспетчер, который отправляет их в хранилище. После обработки запроса хранилище уведомляет всех подписчиков о завершении. При получении событий из хранилища приложение выводит результат операции на страницу.

Логам при инициализации задаётся список объектов, чьи события нужно слушать. При получении событий они логируются в консоль и на экран.

Для проверки расширяемости приложения были добавлены кнопки показа содержимого хранилища и удаления содержимого из него.
