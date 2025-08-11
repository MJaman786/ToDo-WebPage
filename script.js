// let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toLocaleString())

let newDate = new Date().toLocaleString('en-US',{
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});

console.log(newDate);