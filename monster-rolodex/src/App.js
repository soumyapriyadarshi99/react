import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users))
      .catch((err) => { console.log(`something went wrong ${err}`) })
  }, [])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  })

  return (
    <div className="App">
      <h1 className='app-title'>Rolodex Monsters</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='search-box'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchField: ''

//     }
//   }

//   componentDidMount = () => {
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => this.setState(() => {
//     return { monsters: users }
//   }))
//   .catch((err) => { console.log(`something went wrong ${err}`) })
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField }
//     })
//   };

//   render() {

//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this;

// const filteredMonsters = monsters.filter((monster) => {
//   return monster.name.toLowerCase().includes(searchField);
// })

//     return (
//       <div className="App">
//         <h1 className='app-title'>Rolodex Monsters</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder='search monsters'
//           className='search-box'
//         />
//         <CardList monsters={filteredMonsters} />


//       </div>
//     );
//   }
// }

export default App;
