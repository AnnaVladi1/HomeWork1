function random() {
    let number = Math.random() * 100;
    number = Math.round(number);
    return number;
}

let ans = random();

console.log(ans);