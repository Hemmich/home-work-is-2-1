
let companies = {
    company1: {
      name: 'Компания 1',
      employees: ['Сотрудник 1', 'Сотрудник 2', 'Сотрудник 3']
    },
    company2: {
      name: 'Компания 2',
      employees: ['Сотрудник 4', 'Сотрудник 5', 'Сотрудник 6']
    }
  };
  for (let company in companies) {
    console.log(`Сотрудники компании ${companies[company].name}: ${companies[company].employees.join(', ')}`);
  }
  