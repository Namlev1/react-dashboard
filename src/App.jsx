import './App.css'
import Toolbar from './assets/components/molecules/Toolbar'
import QualityOfSale from './assets/components/widgets/qualityOfSale/QualityOfSale.jsx'
import Orders from './assets/components/widgets/orders/Orders.jsx'
import UseViewportWidth from './hooks/useViewportWidth.js'
import { useDispatch } from 'react-redux'
import { toggle } from './store/accountSlice.js'
import Reviews from './assets/components/widgets/reviews/Reviews.jsx'
import ProductRanking from './assets/components/widgets/productRanking/ProductRanking.jsx'
import SaleChart from "./assets/components/widgets/saleChart/saleChart.jsx";
import DropdownMenu from "./assets/components/molecules/DropdownMenu/DropdownMenu.jsx";

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
            <Reviews />
          </div>
        ) : (
          <>
            <div>
              <QualityOfSale />
              <ProductRanking />
              <Orders />
            </div>
            <div>

              <Reviews /><SaleChart/>
                <div>
                    <DropdownMenu
                        title="Orders type"
                        options={[
                            "Paid orders",
                            "Unpaid orders",
                            "Shipped orders",
                            "Unshipped orders",
                            "Refunds"
                        ]}
                    />
                </div>
            </div>
          </>
        )}
      </div>
      <button onClick={() => dispatch(toggle())}>Toggle data</button>
    </div>
  )
}

export default App
