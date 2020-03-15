module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero';
    }
    let res = '';
    
    let sotki = (number - (number%100))/100;
    if (sotki>0) {
        res += tohundred(sotki);
    }
    number = number%100; 
    if ((sotki !=0) && ( number != 0)) {
        res += " ";
    }
    let desyatki = (number - (number%10))/10;
    if (desyatki>1) {
        res +=toten(desyatki);
        number = number%10;
        if (number != 0){
            res += " " + Oneki(number);
        }
    }else {
        res += Oneki(number);
    }
    return res;

}

function toten(desyatki) {
    switch (desyatki) {
        case 9: return "ninety";
        case 8: return "eighty";
        case 7: return "seventy";
        case 6: return "sixty";
        case 5: return "fifty";
        case 4: return "forty";
        case 3: return "thirty";
        case 2: return "twenty";
    }
    return "";
}

function tohundred(number) {
    return Oneki(number) + ' hundred';
}

function Oneki(number) {
    switch (number) {
        case 19: return "nineteen";
        case 18: return "eighteen";
        case 17: return "seventeen";
        case 16: return "sixteen";
        case 15: return "fifteen";
        case 14: return "fourteen";
        case 13: return "thirteen";
        case 12: return "twelve";
        case 11: return "eleven";
        case 10: return "ten";
        case 9: return "nine";
        case 8: return "eight";
        case 7: return "seven";
        case 6: return "six";
        case 5: return "five";
        case 4: return "four";
        case 3: return "three";
        case 2: return "two";
        case 1: return "one";
        case 0: return "";
    }
    return "";
}



