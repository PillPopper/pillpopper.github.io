const list = document.getElementById('list')
const hideToggle = document.getElementById('hideToggle')

let data = (localStorage.getItem('pillPopper')) ? JSON.parse(localStorage.getItem('pillPopper')) : { storedData: [] }

renderstoredData()

  function dataObjectUpdate(){
    localStorage.setItem('pillPopper', JSON.stringify(data.storedData))
  }

function renderstoredData(){
  if(!data.length) return
  
    let time = data[0]
    let day = data[1]
    let description = data[2]
    addItem(time, day, description)
}


document.getElementById('add').addEventListener('click', () => {
  let time = document.getElementById('time')
  let day = document.getElementById('day')
  let description = document.getElementById('description')
  
  if(time.value){
    addItem(time.value, day.value, description.value)
    
    data.storedData.push(time.value, day.value, description.value)
    dataObjectUpdate()
  }
  
  day.value = ''
  time.value = ''
  description.value = ''

  hideToggle.classList.add('hidden') 
  document.getElementById('add').classList.add('hidden') 
})

function addItem(x, y, z){
  if(list.hasChildNodes()){
    clearAllItems()
  }
  let time = document.createElement('li')
  let day = document.createElement('li')
  let description = document.createElement('li')

  time.classList.add('time')
  time.textContent = x

  day.classList.add('day')
  day.textContent = y

  description.classList.add('description')
  description.textContent = z
  
  list.appendChild(day)  
  list.appendChild(time)  
  list.appendChild(description)  

}


function clearAllItems(){
  if(list.hasChildNodes()){
    var child = list.lastElementChild
    while(child){
      list.removeChild(child)
      child = list.lastElementChild
    }
    data.storedData = [] 
    localStorage.clear()
  }
    hideToggle.classList.add('hideToggle')
    setTimeout(() => {
      location.reload()
    }, 250);
}

document.getElementById('remove').addEventListener('click', clearAllItems)


// Current time
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function getTime() {
  var d = new Date();
  var x = document.getElementById("demo");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  return h + ":" + m;
}
document.getElementById('time').value = getTime()

// Current Day
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var weekday = days[d.getDay()]
document.getElementById('day').value = weekday