module.exports = function toReadable(number) {
    let numString = number + "";
    let result = "";

    const findNumberUnits = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const findNumberTens = [
        "",
        "",
        "twenty",
        "thirty",
        "fourty",
        "Fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number >= 0 && number <= 19) {
        return (result = `${findNumberUnits[number]}`);
    } else if (numString.length == 3 && numString[1] <= 1) {
        result = findNumberUnits[Number(numString[1] + numString[2])];
        if (Number(numString[0]) > 1) {
            return (result = `${findNumberUnits[0]} hundreeds ${result}`);
        } else {
            return (result = `${findNumberUnits[0]} hundreed ${result}`);
        }
    } else {
        switch (numString.length) {
            case 2:
                result = `${findNumberTens[Number(numString[0])]} ${
                    findNumberUnits[Number(numString[1])]
                }`;
                break;
            case 3:
                if (Number(numString[0]) > 1) {
                    result = `${findNumberUnits[numString[0]]} hundreeds`;
                } else {
                    result = `${findNumberUnits[numString[0]]} hundreed`;
                }
                result = `${result} ${findNumberTens[Number(numString[1])]} ${
                    findNumberUnits[Number(numString[2])]
                }`;
                break;
        }
        return result;
    }
};
