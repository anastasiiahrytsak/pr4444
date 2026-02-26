function checkAge(age) {
  try {
    if (age < 0) {
     
      throw new Error("Вік не може бути від'ємним!");
    }
    
    if (age < 18) {
      console.log("Доступ заборонено");
    } else {
      console.log("Ласкаво просимо!");
    }
  } catch (error) {

    console.error("Виникла помилка: " + error.message);
  } finally {
  
    console.log("Перевірку завершено.");
  }
}

checkAge(25);  
checkAge(-5);  