let str = 'привет';


function reverse(str) {
    let newStr = '';

    for(let i = str.length - 1;i >= 0;i--) {
        newStr += str[i];

    }

    return newStr;

}

let ans = reverse(str);

console.log(ans);
