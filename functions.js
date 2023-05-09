function stringLength (string) {
    if (string.length > 0 && string.length < 11){
        return string.length;
    }
    else {
        return false;
    }
}

function reverseString (string) {
    return string.split('').reverse().join('');
}

class Operation {
    add (a, b){
        return a + b;
    }
    subtract (a, b){
        return a - b;
    }
    divide (a, b){
        return a / b;
    }
    multiply (a, b){
        return a * b;
    }
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = { stringLength, reverseString, Operation, capitalize };