let ans = prompt('Введите значение');
ans = +ans;

if (ans !== ans) {
    alert('Упс, кажется, вы ошиблись');
} else if (typeof ans === "number") {
    let remainder = ans % 2;
    if (remainder === 0) {
        alert('Вы ввели четное число - ' + ans );
    } else {
        alert('Вы ввели нечетное число - ' + ans );
    }
}
