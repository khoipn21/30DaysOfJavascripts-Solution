// requirements         
document.body.style.fontFamily = 'san-serif, helvetica';
let wrapper = document.querySelector('.wrapper');

let dateDisplay = document.createElement('h4');
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
  dateDisplay.style.backgroundColor = generateColor()
}, 1000);

let generateColor = () => {
  let alphanums = '0123456789abcdef';

  let colorArr = [];
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 15);
    colorArr.push(alphanums[index]);
  }
  return '#' + colorArr.join('');
}

// headings   
let h1 = document.createElement('h1');
h1.innerHTML = 'Asabeneh Yetayeh Challenges in <strong>2020</strong>';
h1.style.fontSize = '40px';
h1.style.fontFamily = 'courier';
h1.style.fontWeight = 'bold';
h1.style.textAlign = 'center';
wrapper.appendChild(h1);

let yearText = document.querySelector('strong');
yearText.style.fontSize = '60px';

setInterval(() => yearText.style.color = generateColor(), 1000);

let h2 = document.createElement('h2');
h2.textContent = '30DaysOfJavaScript Challenge';
h2.style.fontSize = '30px'
h2.style.fontFamily = 'courier'
h2.style.textAlign = 'center'
h2.style.textDecoration = 'underline'

wrapper.appendChild(h2);

// date headings     


wrapper.appendChild(dateDisplay);

// prereuisites end  
let list = document.createElement('ul');
list.style.listStyleType = 'none';
list.style.width = '80%';
list.style.margin = 'auto';

asabenehChallenges2020.challenges.forEach(x => {
  let item = document.createElement('li');

  // innerHTML live :)     
  // 1   
  let titleSpan = document.createElement('span');
  let title = document.createTextNode(x.name);
  

  // 2   
  let dropdown = document.createElement('details');
  let dropdownSpan = document.createElement('span');

  // modify detail   
  let summary = document.createElement('summary');
  summary.textContent = x.name.split(' ')[x.name.split(' ').length - 1];
  // add the topics 
  let topics = document.createElement('ul');

  x.topics.forEach(i => {
    let item = document.createElement('li');
    item.textContent = i;

    topics.appendChild(item);

    // styling    
    item.style.padding = '5px';
    item.style.width = '90%';
    item.style.marginTop = '3px';
    item.style.marginBottom = '3px';
  })
  // styling   
  topics.style.listStyleType = 'none';
  topics.style.width = '80%';
  topics.style.margin = 'auto';

  
  //dropdownSpan.style.float='center'
  // 3 
  let status = document.createTextNode(x.status);
  let statusSpan = document.createElement('span');
  

  // appends    
  item.appendChild(titleSpan);
  dropdown.appendChild(summary);
  dropdown.appendChild(topics);
  item.appendChild(dropdownSpan);
  item.appendChild(statusSpan);
  list.appendChild(item);

  // styling     
  item.style.fontFamily='courier'
  item.style.padding = '20px';
  item.style.width = '95%';
  item.style.margin = '5px';
  item.style.fontSize='20px'
  titleSpan.appendChild(title);
  titleSpan.style.display='inline-block'
  titleSpan.style.verticalAlign='top'
  titleSpan.style.width='33.3%'
  dropdownSpan.appendChild(dropdown);
  dropdownSpan.style.display='inline-block'
  dropdownSpan.style.width='33.3%'
  statusSpan.appendChild(status);
  statusSpan.style.display='inline-block'
  statusSpan.style.width='33.3%'
  statusSpan.style.textAlign='right'
  statusSpan.style.verticalAlign='top'
  if (item.textContent.endsWith('Done'))
    item.style.backgroundColor = 'lightgreen'
  else
    if (item.textContent.endsWith('Ongoing'))
      item.style.backgroundColor = 'yellow'
    else item.style.backgroundColor = 'red'
})

wrapper.appendChild(list);
