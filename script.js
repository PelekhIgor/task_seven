function getArray(){                               // функция которая создает массив
    const arr = Array(7).fill(0)    // Метод fill() заполняет все элементы массива от начального до конечного индексов одним значением.
    return() => arr.map((e,i) => ++i  )     // Замыкание даёт доступ к внешней функции из внутренней функции
}
const arr = getArray()()                           // Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c).

console.log(arr)


function sum (arr, index){                          // Рекурсия которая считает сумму чисел элементов массива
    if(index === 0){                                // Базовая провекра заканчивающая рекурсию
        return arr[index]
    }
    else {
        return arr[index] + sum(arr, [index] - 1)   // Рекурсия, функция вызивает сама себя
    }
}
console.log(sum(arr,1))