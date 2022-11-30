let ans = prompt('Введите значение');
ans = +ans;

if (ans !== ans) {
    console.log('Упс, кажется, вы ошиблись');
} else if (typeof ans === "number") {
    let remainder = ans % 2;
    if (remainder === 0) {
        console.log('Вы ввели четное число - ' + ans );
    } else {
        console.log('Вы ввели нечетное число - ' + ans );
    }
}

