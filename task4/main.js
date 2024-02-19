let travel = {
    routeName: "Поездка по Южной Америке",
    dates: "10.08.2022 - 25.08.2022",
    countries: ["Бразилия", "Аргентина", "Чили"],
    cities: ["Рио-де-Жанейро", "Буэнос-Айрес", "Сантьяго", "Валпараисо"],
    attractions: ["Карнавал в Рио", "Водопад Игуасу", "Гора Аконкагуа", "Долина декабристов"]
  };
  for (let property in travel) {
    console.log(`${property}: ${travel[property]}`);
  }
  if (travel.countries.length > 1 && travel.cities.length > 1) {
    console.log("Маршрут путешествия разнообразен по странам и городам");
  } else {
    console.log("Маршрут путешествия не такой уж и разнообразный");
  }