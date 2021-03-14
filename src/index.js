module.exports = function toReadable (number) {
    const ch = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
        '100': 'hundred'
    };
    number = number.toString();
    if (number <= 19 || (number % 10 === 0 && number.length<3)) {
		return `${ch[number]}`;
        	}
    if (number <= 99) {
       return  `${ch[number[0] + '0']} ${ch[number[1]]}`;
    }
    if (number >= 100) {
        number = number.toString();

        if (number[1] == 0 && number[2] == 0) {
            return `${ch[number[0]]} ${ch['100']}`;
        } 

        if (number[1] == 0 && number[2] != 0) {
            return `${ch[number[0]]} ${ch['100']} ${ch[number[2]]}`;
        } 

        if (number.slice(1, 3) <= 20) {
            return `${ch[number[0]]} ${ch['100']} ${ch[number.slice(1, 3)]}`;
        } else if (number.slice(1, 3) <= 99 && number[2] == 0) {
            return `${ch[number[0]]} ${ch['100']} ${ch[number[1] + '0']}`;
        } else {
            return `${ch[number[0]]} ${ch['100']} ${ch[number[1] + '0']} ${ch[number[2]]}`;
        } 
