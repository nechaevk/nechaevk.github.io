/*
  Соединить задание 1 и 2

  Напишите функцию validate которая проверяет все поля формы
  и возвращает результат в виде обьекта со свойствами firstname,
  lastname и tel.

  Кроме того, формат объекта: в свойства записывается буль-флаг
  уведомляющий о статусе прохождения валидации для поля.

  При клике на кнопку submit должна происходить проверка.

  Визуализировать результат проверки.
    Написать функцию showResults(results), которая принимает
    один аргумент results - объект такого формата который возвращает
    функция validate, и создает html разметку по результатам
    этого объекта.

    showResults добавляет в список с классом .results
    (уже есть в html), li для каждого поля формы. В li записать:
    SUCCESS: 'имя поля' passed validation
    ERROR: 'имя поля' failed validation

    Для li с положительным результатом дать класс success,
    с отрицательным error.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const farma =  document.querySelector("form");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");

const validate = (e) => {
    // event.preventDefault();

    const firstName = firstname.value;
    const lastName = lastname.value;
    const telephone = tel.value;

    const firstNamePattern = /^[A-Za-zА-Яа-я]+(\s[A-Za-zА-Яа-я]+){0,2}$/;
    const lastNamePattern = /^([A-Za-zА-Яа-я])+([\s-]+[A-Za-zА-Яа-я]+){0,2}$/;
    const telephonePattern = /^\+[0-9]{12}$/;

    const obj = {};

    obj['first name'] = firstNamePattern.test(firstName);
    obj['last name'] = lastNamePattern.test(lastName);
    obj['tel'] = telephonePattern.test(telephone);

    console.log(obj);
    return obj;
}

const showResults = (resObj) => {
    resultsList.innerHTML = '';

    for (key in resObj) {
        const result = resObj[key] === true
            ? `SUCCESS: ${key} passed validation`
            : `ERROR: ${key} failed validation`;

        const newListItem = document.createElement('li');
        newListItem.textContent = result;
        resultsList.append(newListItem);
    }
}

submitBtn.addEventListener("click", (e) => {
    const results = validate(e);
    showResults(results);
});
