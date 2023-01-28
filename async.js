//Problem -> console 10 time 10
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
// }

// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
// }


for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i++)
    }, 1000)
    if (i === 9) {
        i = 0;
        break;
    }

}


for (var j = 0; j < 10; j++) {
    setTimeout(console.log(j), 1000)
}

