// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned, console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(data => {
    const topicsArr = data.data.topics
    topicsArr.forEach(topic => {
      topics.appendChild(TabCreator(topic))
    })
  })
  .catch(error => {
    console.log('something went wrong >_<', error)
  })


function TabCreator(topic){

  const tab = document.createElement('div')

  if (topic === 'node.js') {
    topic = 'node'
  }

  tab.classList.add('tab')
  tab.dataset.tab = topic
  tab.textContent = `${topic}`

  tab.addEventListener('click', () => selectTab(tab))

  return tab
}

function selectTab(tab) {

  const tabs = document.querySelectorAll('.tab')
  const cards = document.querySelectorAll('.card')

  tabs.forEach((tab) => tab.classList.remove('active-tab'))
  cards.forEach((card) => card.style.display = 'none')

  tab.classList.add('active-tab')
  Array.from(cards).filter((card) => card.dataset.tab === tab.dataset.tab)
  .forEach((card) => card.style.display = 'flex')
}
