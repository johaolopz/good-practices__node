const arr = ['one', 'two', 'four', 'three']

const [,,three] = arr

const func = {
    added: (num, cb) => {
        if (typeof num !== "number") {
            return cb(`${num} not is a number (NaN)`)
        }
        return ++num
    }
}

console.log('Using callback: ', func.added('3', (error)=>{
    if (error) {
        return error
    }
}))
console.log('Callback test')