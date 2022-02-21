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
        str.substr(0, maxLength - 1).concat('…')
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
 * Функция окрукления элементов массива методами Math
 * @param {Array<number>}  array  массив чисел
 * @param {string} methodMath метод Math для округления элементов массива
 * @return {Array|null}
 */
const roundArrayElements = (array, methodMath) => {
    return (methodMath in Math) ?
        array.map(Math[methodMath])
        :
        null
}

const /** Array<number>*/arrayForTest4 = [1.25, 5.36, 9.56, 9.45, -8.36]
// console.log(roundArrayElements(arrayForTest4, 'round'))
// console.log(roundArrayElements(arrayForTest4, 'ceil'))
// console.log(roundArrayElements(arrayForTest4, 'floor'))


/*
TASK5
Написать функцию, которая исключает из массива все "не числа".
1. Обрабатываемый массив.
*/

/**
 * Функция  исключает из массива все "не числа"
 * @param {Array<>}  array  смешанный массив
 * @return {Array<number>}
 */
const removeNonNumbersFromArray = (array) => {
    return array.reduce((returnArray,currentItem) =>{
        if(typeof currentItem == 'number' && !isNaN(currentItem)) returnArray.push(currentItem)
        return returnArray
    } ,[]
    )
}

const /** Array*/mixedArray = [1, 2, null, NaN, 'qwerty', 3, NaN, 'null', '4', 5]
console.log(removeNonNumbersFromArray(mixedArray))
