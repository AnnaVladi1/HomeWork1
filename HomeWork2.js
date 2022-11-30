let x;
switch (typeof x) {
    case 'number':
        console.log(x + ' - число');
        break;
    case 'string':
        console.log(x + ' - строка');
        break;
    case 'boolean':
        console.log(x + ' - логический');
        break;
    case "undefined":
        console.log('Тип x не определён');
        break;
}