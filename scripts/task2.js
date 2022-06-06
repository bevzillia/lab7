function isPureNumber(number) {
    if (number === 1 ) {
        return true;
    }

    let flag = true;

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            flag = false;
            break;
        }
    }

    return flag;
}

let pureNumberArray = [];

for (var i = 1; i < 10000 ; i++) {
    const pureNumber = isPureNumber(i)
    if (pureNumber) {
        pureNumberArray.push(i);
        if (pureNumberArray.length === 5) {
            break;
        }
    }
}

console.log(pureNumberArray)

let sum = 0;
function count() {
    for (i = 0; i < pureNumberArray.length; i++) {
        sum += pureNumberArray[i];
    }
}
count();
console.log(sum);