import './App.css'
import Toolbar from './assets/components/molecules/Toolbar'
import QualityOfSale from './assets/components/widgets/qualityOfSale/QualityOfSale.jsx'
import Orders from './assets/components/widgets/orders/Orders.jsx'
import UseViewportWidth from './hooks/useViewportWidth.js'
import { useDispatch } from 'react-redux'
import { toggle } from './store/accountSlice.js'

function App() {
  const dispatch = useDispatch()
  const viewportWidth = UseViewportWidth()
  return (
    <div className="App">
      <Toolbar /> {/* Wyświetlenie komponentu Toolbar */}
      <div className="main">
        {/*Adds responsiveness*/}
        {viewportWidth < 900 ? (
          <div>
            <QualityOfSale />
            <Orders />
          </div>
        ) : (
          <>
            <div>
              <QualityOfSale />
            </div>
            <div>
              <Orders />
            </div>
          </>
        )}
      </div>
      <button onClick={() => dispatch(toggle())}>Toggle data</button>
    </div>
  )
}

export default App
