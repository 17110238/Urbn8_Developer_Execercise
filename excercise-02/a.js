const api = (callback) => {
    const result = 1;
    callback(result)
}

const api2 = (callback) => {
    const result = 2;
    callback(result)
}

const api3 = (callback) => {
    const result = 3;
    callback(result)
}

api(function (result) {
    console.log('result', result)
    api2(function (result2) {
        console.log('result2', result2)
        api3(function (result3) {
            console.log('result3', result3)
        })
    })
})

const a = 1235
const b = 333