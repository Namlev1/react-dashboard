import './App.css'
import Toolbar from './assets/components/molecules/Toolbar'
import QualityOfSale from './assets/components/widgets/qualityOfSale/QualityOfSale.jsx'
import Orders from './assets/components/widgets/orders/Orders.jsx'
import UseViewportWidth from './hooks/useViewportWidth.js'
import Reviews from './assets/components/widgets/reviews/Reviews.jsx'
import ProductRanking from './assets/components/widgets/productRanking/ProductRanking.jsx'
import SaleChart from './assets/components/widgets/saleChart/saleChart.jsx'
import OrderView from "./assets/components/molecules/OrderView/OrderView.jsx";
import Userlist from "./assets/components/molecules/Userlist.jsx";

function App() {
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
            <ProductRanking />
            <SaleChart />
          </div>
        ) : (
          <>
            <div>
              <QualityOfSale />
              <ProductRanking />
              <Orders />
            </div>
            <div>
              <Reviews />
              <SaleChart />
                <Userlist/>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
