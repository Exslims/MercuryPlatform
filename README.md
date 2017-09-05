## IDEA + git showcase: 
https://www.youtube.com/watch?v=PXaXj5PFuVM&feature=youtu.be

---

## build: mvn clean install

server host: http://localhost:8090

frontend host: http://localhost:8080

---

## Структура

- client - фронтенд модуль
- data-service - по сути весь бэкэнд модуль
- local-server - модуль деплоя, в нём main спрингбута и в него всё складывается при сборке.
- shared - модуль общих классов/файлов между клиентом (декстопным) и сервером
- test-local-socket-server - тестовый модуль клиента для сокет сервера (чтобы не поднимать каждый раз десктопный меркури)

---

## Процессы

- Все новые ветки с фичами отводятся от develop.
- именование: feature/название фичи или имя тикета
- Как только фича закончена и всё собирается делает пул реквест
- Если есть конфилкты мержа резолвите, я мержу в депелоп
- Детальнее в видео IDEA + git showcase

---

## Run/Debug configurations:

Перед запуском убедитесь что собрали проект через mvn clean install иначе ресурсы фронтенда не попадут в запуск.

### Spring boot


<img src="http://s01.geekpic.net/di-Y28O4E.png"/>

### Front-end

<img src="http://s01.geekpic.net/di-TDLBUL.png"/>

---
