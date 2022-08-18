let array = [5, 9, 6, 8, 4, 6]
let sum = 0
let count = 0
const lenght = array.length

const total = (array) => {
    if (count === lenght) {
        return sum
    }
    else {
        sum += array[count]
        count++
        return total(array)
    }
}

console.log(total(array))
