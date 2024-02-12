let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Выводим содержимое массива в консоль
  console.log(array);
  
  // Находим сумму всех элементов массива
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }
  console.log('Сумма всех элементов: ' + sum);
  
  // Подсчитываем количество элементов в каждом вложенном массиве
  for (let i = 0; i < array.length; i++) {
    console.log('Количество элементов в массиве ' + i + ': ' + array[i].length);
  }