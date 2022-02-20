const /** string */ loremString = 'Lorem Ipsum Ipsum - это   это текст-"рыба", qwer ' +
    'qwer часто часто используемый в печати и вэб-дизайне. Lorem Ipsum ' +
    'является стандартной "рыбой" для текстов на латинице с начала XVI ' +
    'века. В то время некий некий безымянный печатник создал большую ' +
    'коллекцию размеров и форм шрифтов, используя Lorem Ipsum для ' +
    'распечатки образцов. Lorem Ipsum не только успешно пережил без ' +
    'заметных изменений пять веков, но и перешагнул в электронный дизайн.'

/*
TASK1
Функция для выдачи дублирующихся подряд слов
*/
/**
 * Функция для выдачи дублирующихся подряд слов
 * @param {string} str строка для анализа на дубликаты
 * @return {Array<string>|null} - массив дубликатов или null
 */
const getDuplicateFromString = str => {
    const /** @type {RegExp}*/regularVar = /[ ]+([A-za-zА-Яа-я]+)[ ]+\1/g

    return str.match(regularVar)
}

/*
TASK2
Функция для удаления дублирующихся подряд слов в строке
*/

/**
 * Функция для удаления дублирующихся подряд слов в строке
 * @param {string} str строка для удаления дубликатов
 * @return {string} - строка без дубликатов
 */
const removeDuplicateFromString = str => {
    const /** @type {RegExp}*/regularVar = /[ ]+([A-za-zА-Яа-я]+)[ ]+\1/g
    return str.replace(regularVar, ' $1')
}
// console.log(getDuplicateFromString(loremString))
// console.log(removeDuplicateFromString(loremString))

/*
TASK3
Функция усечения строки по заданной длине
*/

/**
 * Функция усечения строки по заданной длине
 * @param {string} str строка для усечения
 * @param {number} maxLength максимальная длина строки с усечением
 * @return {string} - строка с усечением или без
 */
const truncatString = (str, maxLength) => {
    return str.length > maxLength ?
        str.substr(str, maxLength - 1).concat('…')
        :
        str;
}

//console.log(truncatString(loremString, 20))


/*
TASK4
Написать функцию, которая принимает два параметра.
1. Массив, состоящий из чисел с десятичной частью.
2. Метод округления "round", "ceil" или "floor".
*/

/**
 * Функция усечения строки по заданной длине
 * @param {Array<number>}  array  массив чисел
 * @param {string} metodMath метод Math для округления элементов массива
 * @return {Array|null}
 */
const roundArrayElements = (array, metodMath) => {
    return (metodMath in Math) ?
        array.map(Math[metodMath])
        :
        null
}

const /** Array<number>*/arrayForTest4 = [1.25, 5.36, 9.56, 9.45, -8.36]
// console.log(roundArrayElements(arrayForTest4, 'round'))
// console.log(roundArrayElements(arrayForTest4, 'ceil'))
// console.log(roundArrayElements(arrayForTest4, 'floor'))

function isBigEnough(element) {
    return element >= 10;
}

console.log([12, 5, 8, 130, 44].every(isBigEnough));   // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true