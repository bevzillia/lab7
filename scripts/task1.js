




function isEvenNumber( number ) {
    if (typeof number !== "number") {
        return "";
    } 

    if ( number % 2 === 0) {
        return true;
    } else {
        return false;
    } 
}

const ten = 10;
const five = 5;

const isTenEvenNumber = isEvenNumber(ten)
const isFiveEvenNumber = isEvenNumber(five)

console.log('Is ' + ten + ' even number: ' + isTenEvenNumber);
console.log('Is ' + five + ' even number: ' + isFiveEvenNumber);

