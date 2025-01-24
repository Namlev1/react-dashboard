import './App.css'
import Toolbar from './assets/components/molecules/Toolbar'
import QualityOfSale from './assets/components/widgets/qualityOfSale/QualityOfSale.jsx'

function App() {
  return (
    <div className="App">
      <Toolbar /> {/* Wyświetlenie komponentu Toolbar */}
      <div className="main">
        <QualityOfSale />
      </div>
    </div>
  )
}

export default App
