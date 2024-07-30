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
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return (result = "zero");
    } else if (number >= 0 && number <= 19) {
        result = `${findNumberUnits[number]}`;
        return result.trim();
    } else if (numString.length == 3 && numString[1] <= 1) {
        result = findNumberUnits[Number(numString[1] + numString[2])];
        result = `${findNumberUnits[Number(numString[0])]} hundred ${result}`;
        return result.trim();
    } else {
        switch (numString.length) {
            case 2:
                result = `${findNumberTens[Number(numString[0])]} ${
                    findNumberUnits[Number(numString[1])]
                }`;
                break;
            case 3:
                result = `${findNumberUnits[Number(numString[0])]} hundred ${
                    findNumberTens[Number(numString[1])]
                } ${findNumberUnits[Number(numString[2])]}`;
                break;
        }
        return result.trim();
    }
};
