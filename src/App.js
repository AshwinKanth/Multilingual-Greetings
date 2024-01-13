import {Component} from 'react'

import TabItem from './components/TabItem'
import Greeting from './components/Greeting'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here

class App extends Component {
  state = {activeGreetingId: languageGreetingsList[0].id}

  onClickTab = id => {
    this.setState({activeGreetingId: id})
  }

  render() {
    const {activeGreetingId} = this.state

    const filteredGreeting = languageGreetingsList.filter(
      each => each.id === activeGreetingId,
    )

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tabList-container">
          {languageGreetingsList.map(eachItem => (
            <TabItem
              tabItemDetails={eachItem}
              key={eachItem.id}
              onClickTab={this.onClickTab}
              isActiveTab={activeGreetingId === eachItem.id}
            />
          ))}
        </ul>

        {filteredGreeting.map(each => (
          <Greeting greetingDetaila={each} key={each.id} />
        ))}
      </div>
    )
  }
}

export default App
