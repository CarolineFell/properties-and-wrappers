// Дан объект, например:
// const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

// Дан порядок сортировки свойств:
// ["name", "level"]

// Пример вызова вашей функции:
// orderByProps(obj, ["name", "level"])

export default function orderByProps(obj, order) {
  const array = [];

  for (const key in obj) {
    if (!order.some((item) => item === key)) array.push(key);
  }

  array.sort();

  order.reverse().forEach((item) => {
    if (Object.prototype.hasOwnProperty.call(obj, item)) array.unshift(item);
  });

  const objectsArray = array.map((key) => ({ [key]: obj[key] }));
  return objectsArray;
}

// После обработки вашей функцией:
// [
//   {key: "name", value: "мечник"}, // порядок взят из массива с ключами
//   {key: "level", value: 2}, // порядок взят из массива с ключами
//   {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
//   {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
//   {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
// ]

// Т.е. сначала идёт сортировка по тому, как указано в массиве сортировки, для тех ключей,
// для которых в массиве сортировки нет записи, сортировка идёт в алфавитном порядке.