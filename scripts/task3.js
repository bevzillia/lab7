function calculateStrings(number) {
    let sum = 0;
    let lastNumberString = "";

    for (let i = 1; i <= number ; i++) {
        lastNumberString = lastNumberString + 1;
        sum += Number(lastNumberString)
    }
    return sum;
}

const result = calculateStrings(11);
console.log("result:" + result)