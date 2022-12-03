let fruits = new Map( [

    [`banana`, `yellow`],

    [`kiwi`, `green`],

    [`cherry`, `red`],

    [`orange`, `Orange`]

]);



for (let key of fruits.keys()) {
    console.log(`Ключ - ${key}, значение - ${fruits.get(key)}`);
}
