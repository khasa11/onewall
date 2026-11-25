# OneWall --- команды для разработки

Все команды выполняй в **терминале VS Code** из папки проекта:

``` powershell
cd C:\Programs\VSFiles\my\onewall
```

## 1. Ежедневная разработка

Запустить Metro для установленной Development Build версии приложения:

``` powershell
npx expo start --dev-client
```

Перезапустить сервер с очисткой кэша (если приложение ведёт себя странно
или изменения не подхватываются):

``` powershell
npx expo start --dev-client --clear
```

Остановить сервер: `Ctrl + C`.

## 2. Установка и обновление библиотек

Установить Expo-совместимую версию библиотеки:

``` powershell
npx expo install название-пакета
```

Установить обычный npm-пакет:

``` powershell
npm install название-пакета
```

Удалить пакет:

``` powershell
npm uninstall название-пакета
```

Проверить проект на распространённые проблемы:

``` powershell
npx expo-doctor
```

## 3. Сборка Android через EAS

### Development Build --- для разработки

Обычно APK пересобирается только после изменений нативных зависимостей
или конфигурации:

``` powershell
npx eas-cli@latest build --platform android --profile development
```

### Preview Build --- тестовая сборка без режима разработки

``` powershell
npx eas-cli@latest build --platform android --profile preview
```

### Production Build --- релизная сборка

``` powershell
npx eas-cli@latest build --platform android --profile production
```

Посмотреть сборки:

``` powershell
npx eas-cli@latest build:list
```

## 4. Android Debug Bridge (ADB)

Проверить, видит ли компьютер подключённый телефон:

``` powershell
adb devices
```

Установить APK, который уже скачан на компьютер:

``` powershell
adb install "C:\путь\к\файлу.apk"
```

Переустановить APK поверх установленного приложения, сохранив данные
(если подпись совместима):

``` powershell
adb install -r "C:\путь\к\файлу.apk"
```

## 5. Полезные команды проекта

Запустить Expo CLI:

``` powershell
npx expo
```

Посмотреть установленные версии ключевых пакетов:

``` powershell
npm ls expo react-native heroui-native
```

Проверить, что рабочая папка --- корень проекта:

``` powershell
Get-Location
```

## 6. Обычный рабочий цикл

1.  Открыть проект `onewall` в VS Code.
2.  Подключить телефон к той же Wi-Fi-сети, что и компьютер (или
    использовать USB, если настроено).
3.  В терминале выполнить `npx expo start --dev-client`.
4.  Открыть установленное приложение OneWall Development Build на
    телефоне и подключиться к запущенному серверу.
5.  Редактировать код --- изменения обычно появляются автоматически
    благодаря Fast Refresh.

**Важно:** не нужно собирать и устанавливать APK после каждого изменения
JavaScript/TypeScript, стилей или интерфейса. Новая Development Build
обычно нужна при добавлении/обновлении нативных библиотек или изменении
нативной конфигурации Android.

Если телефон не подключается к серверу, сначала проверь, что оба
устройства в одной сети Wi-Fi. Для диагностики можно попробовать
перезапуск с `--clear`.

------------------------------------------------------------------------

OneWall • памятка разработчика
