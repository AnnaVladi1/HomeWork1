let arr = ['1', 1, '1', '1'];

function compare(arr) {

    let ans = true;

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[0] === arr[i]);

        if (arr[i] !== arr[0]) {
            ans = false;
        }

    }

    return ans;

}

let a = compare(arr);

console.log(`Одинаковы ли массивы - ${a}`);