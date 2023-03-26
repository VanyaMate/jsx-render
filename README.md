## Preact

Мы получаем только JSX, без хуков. В целом норм, но есть варианты лучше.

Дополнительно получаем примерно 8кб кода.

## Preact + Preact/Compare

Дополнительно к JSX мы получаем хухи похожие на хуки из реакта. Но тут и билд будет весить больше. 

Дополнительно получаем примерно 15-17кб кода.

## Своя реализация JSX рендера

Мы получаем только JSX, без хуков. Если нам нужен только JSX - это самый лучший вариант.

Дополнительный код примерно 1кб.

## Solid-JS 

Если мы будем использовать только JSX - разницы с преатом нету. И там и там получим дополнительно 8кб.
Но разница с преактом заключается в хуках. Небольшая разница в синтаксисе и большая в размере.

Только JSX - дополнительно 8кб.
JSX + Hooks - дополнительно 9кб. 

Получается мы получаем хуки за 1кб. Это слишком хорошо.

# Итог на данный момент:
- Если нам нужно использовать только JSX - лучше всего написать свою реализацию.
- Если нам нужно использовать JSX + Hooks - лучше всего подходит Solid-JS.