// const square = function(x) {
//     return x * x
// }
/////////////////////////////////////
// const square = (x) => {
//     return x * x
// }

////////////////////////////////////////////////
// const square = (x) => x * x
// console.log(square(3))

const event = {
    name: 'BirthDay Party',
    guestList: ['Andrew', 'Jen', 'Mike'],

    printGuestList() {
        // const aaa = this
        console.log('Guest List for' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending ' + this.name)
        })
    }
}

event.printGuestList()