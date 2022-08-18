const api = () => {
    return new Promise((resolve, reject) => {
        const result = 1
        if (result) {
            resolve(result)
        }
        else {
            reject('Error from api')
        }
    })
}

const api2 = () => {
    return new Promise((resolve, reject) => {
        const result = 2
        if (result) {
            resolve(result)
        }
        else {
            reject('Error from api2')
        }
    })
}

const api3 = () => {
    return new Promise((resolve, reject) => {
        const result = 3
        if (result) {
            resolve(result)
        }
        else {
            reject('Error from api3')
        }
    })
}


api()
    .then(result => {
        console.log(result)
        api2()
            .then(result2 => {
                console.log(result2)
                api3()
                    .then(result3 => {
                        console.log(result3)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    })
    .catch(err => {
        console.log(err)
    })
