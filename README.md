<img src="https://travis-ci.org/Exslims/MercuryPlatform.svg?branch=develop"/>

## IDEA + git showcase + процессы: 
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
- test-local-socket-client - тестовый модуль клиента для сокет сервера (чтобы не поднимать каждый раз десктопный меркури)

---

## Процессы

- Все новые ветки с фичами отводятся от develop.
- именование: feature/название фичи или имя тикета
- Как только фича закончена и всё собирается делаете пул реквест
- Если есть конфликты мержа резолвите, я мержу в депелоп
- Детальнее в видео IDEA + git showcase
- Поставить эти галочки в окне коммита + не забывать использовать самому автоформатирование идеи. Ctrl + alt + L Ctrl + alt + O

<img src="http://s01.geekpic.net/di-7AJWG7.png"/>

---

## Run/Debug configurations:

Перед запуском убедитесь что собрали проект через mvn clean install иначе ресурсы фронтенда не попадут в запуск.

### Spring boot


<img src="http://s01.geekpic.net/di-Y28O4E.png"/>

### Front-end

<img src="http://s01.geekpic.net/di-TDLBUL.png"/>

---
