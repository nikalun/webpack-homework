# Задание по курсу Webpack

Необходимо написать Webpack конфигруацию для сборки приложения.
1. Правильно обработать необходимые модули через нужные загрузчики
2. CSS в данном задании написано с использованием `postcss`, потому учтите это при написании кофигурации.
3. Должен быть настроен webpack-dev-server для локальной разработки
4. Конфигурация должна иметь параметры для дев и прод окружения. В прод окружении необходимо использовать mini-css плагины для сборки стилей в единиый минифицированный css-файл, для дев окружения стили можно загружать как угодно (проще всего style-loader). Так же только для прод сборки использовать возможные оптимизации и очистки
5. Разделите js-код на различные бандлы и загружайте роуты динамически
6. Добавить в package.json все необходимые команды для сборки в разных режимах или запуска сервера

Примечание: Для получения высшего балла можете поэкспрементировать с хэшами, в комментариях к коду можете обносновать свой выбор. Можно попробовать вынести React таким образом, чтобы в каждом файле компонента не импортировать его через `import React from 'react';` Будет так отлично, если вы грамотно разделите ваш файл конфигурации на несколько (например для дев и прод сборок). Использование новых изученных вами способов оптимизации и механик приветствуется. Но не забывайте добавлять комментарии в этом случае, чтобы ускорить и облегчить проверку.