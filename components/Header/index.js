// STEP 1: Create a header component.
// -----------------------
// Using a function to create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

axios
  .get(
    `http://dataservice.accuweather.com/currentconditions/v1/347629?apikey=${APIkey}`
  )
  .then((weather) => {
    currentTemp = weather.data[0].Temperature.Imperial.Value
    conditions = weather.data[0].WeatherText
    Header(currentTemp, conditions)
  })

function Header(currentTemp, conditions) {

  const curDate = new Date()
  const month = {
    0: 'JAN',
    1: 'FEB',
    2: 'MAR',
    3: 'APR',
    4: 'MAY',
    5: 'JUN',
    6: 'JUL',
    7: 'AUG',
    8: 'SEP',
    9: 'OCT',
    10: 'NOV',
    11: 'DEC'
  }

  const headerContainer = document.querySelector('.header-container')
  const header = document.createElement('div')
  const date = document.createElement('span')
  const title = document.createElement('h1')
  const temp = document.createElement('span')

  header.classList.add('header')
  date.classList.add('date')
  temp.classList.add('temp')

  date.textContent = `${month[curDate.getMonth()]} ${curDate.getDate()}, ${curDate.getFullYear()}`
  title.textContent = "Lambda Times"
  temp.textContent = `${currentTemp}°F ${conditions.toUpperCase()}`

  headerContainer.appendChild(header)
  header.appendChild(date)
  header.appendChild(title)
  header.appendChild(temp)

  return header
}
