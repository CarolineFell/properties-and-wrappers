export default function takeFromObject(character) {
  if (!Object.prototype.hasOwnProperty.call(character, 'special')) {
    throw new Error('There is NO special properties in Object');
  }

  const { special } = character;
  const data = special.map((element) => {
    const { id, name, icon, description = 'Описание засекречено' } = element;
    return { id, name, icon, description };
  });

  return data;
}

// Вам необходимо для панели выбора варианта атаки вытащить id, иконку и описание из объекта:

// {
//   name: 'Лучник',
//   type: 'Bowman',
//   health: 50,
//   level: 3,
//   attack: 40,
//   defence: 10,
//   special: [
//     {
//       id: 8,
//       name: 'Двойной выстрел',
//       icon: 'http://...',
//       description: 'Двойной выстрел наносит двойной урон'
//     },
//     {
//       id: 9,
//       name: 'Нокаутирующий удар',
//       icon: 'http://...'
//       // <- обратите внимание, описание "засекречено"
//     }
//   ]
// }

// Но для некоторых (ещё недоступных) атак описание является засекреченным и не отображается:

// {
//   id: 9,
//   name: 'Нокаутирующий удар',
//   icon: 'http://...'
// }

// Напишите функцию с аргументом-деструктором, которая извлекает массив с нужными полями
// (id, name, description, icon) из объекта, а если значения для поля description нет -
// устанавливает default'ное значение в 'Описание недоступно'. Функция должна возвращать
// извлечённый массив из объектов с четыремя полями.