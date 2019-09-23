const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This an error', undefined)
        calllback(undefined, [1, 4, 7])
    })
}

doWorkCallback((error, result) => {
    if (error) {
        console.log(error)
    }
    console.log(result)
})