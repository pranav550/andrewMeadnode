const doworkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('Things Go Wrong')
        resolve([7, 4, 1])

    }, 2000)
});

doworkPromise.then((result) => {
    console.log('success', result)
}).catch((error) => {
    console.log('Error', error)
})