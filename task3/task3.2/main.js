let users = [
    { name: 'Иван', age: 25 },
    { name: 'Мария', age: 30 },
    { name: 'Петр', age: 28 }
  ];
  for (let user of users) {
    console.log(`Имя: ${user.name}, Возраст: ${user.age}`);
  }
  for (let user of users) {
    user.age++; 
  }
  for (let user of users) {
    console.log(`Имя: ${user.name}, Новый возраст: ${user.age}`);
  }
  