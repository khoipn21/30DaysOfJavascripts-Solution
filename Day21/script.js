let year = document.querySelector("strong")
year.style.fontSize = '80px'

function colorGen() {
    let char = '01345678abcdef'
    let colorIndex = []
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 15)
        colorIndex.push(char[index])
    }
    return '#' + colorIndex.join('')
}

setInterval(function () {
    year.style.color = colorGen()
}, 1000)

let h1 = document.querySelector('h1');
h1.style.fontSize = '40px';
h1.style.fontFamily = 'courier';
h1.style.fontWeight = 'bold';
h1.style.textAlign = 'center';

let h2 = document.querySelector('h2')
h2.style.fontSize = '30px'
h2.style.fontFamily = 'courier'
h2.style.textAlign = 'center'
h2.style.textDecoration = 'underline'

let dateDisplay = document.querySelector("p")
function getDate() {
    let date = new Date()
    let year = date.getFullYear()
    let monthIndex = date.getMonth()
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    day < 10 ? hour = '0' + day.toString() : day
    hour < 10 ? '0' + hour.toString() : hour
    minute < 10 ? minute = '0' + minute.toString() : minute
    second < 10 ? second = '0' + second.toString() : second
    dateDisplay.textContent = `${month[monthIndex]} ${day}, ${year} ${hour}:${minute}:${second}`
}


dateDisplay.style.margin = 'auto'
dateDisplay.style.padding = '10px'
dateDisplay.style.textAlign = 'center';
dateDisplay.style.fontSize = '20px';
dateDisplay.style.fontWeight = '400';
dateDisplay.style.width = '20%';

setInterval(() => {
    getDate()
    dateDisplay.style.backgroundColor = colorGen()
}, 1000);

const list = document.querySelectorAll("li")

list.forEach(item => {
    item.style.listStyleType = 'none'
    item.style.fontSize = '20px'
    item.style.padding = '20px'
    item.style.margin = '5px'
    item.style.width = '95%'
    item.style.fontFamily = 'courier'
    item.style.fontWeight = '400'
    //item.style.backgroundColor='red'
    if (item.textContent.endsWith('Done'))
        item.style.backgroundColor = 'lightgreen'
    else
        if (item.textContent.endsWith('Ongoing'))
            item.style.backgroundColor = 'yellow'
        else item.style.backgroundColor = 'red'
})