//x ? 'Yes' : 'No'

import Header from './components/Header'
//import { Footer, Name } from './components/Footer'

const App = () => {
  const name = 'dev@rafaelantun.es'
  const x = false

  return (
    <div className="container">
      <Header/>
    </div>
  );
}


/* class App extends React.Component {
  render() {
    return <h1>Hello from a class<h1>
  }
}*/


export default App;
