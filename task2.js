// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

async function fetchData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    
        const userName = document.getElementById('userNameInput').value;
    
        const user = data.find(user => user.name === userName);
    
        if (user) {
            const userCitySpan = document.getElementById('userCity');
            userCitySpan.textContent = user.address.city;
        } else {
            console.log("User not found!");
        }
    }
    
    document.getElementById('getUserButton').addEventListener('click', fetchData);
    