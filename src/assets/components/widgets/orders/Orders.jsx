import WidgetTitleBar from '../../atoms/WidgetTitleBar/WidgetTitleBar.jsx'
import Table from '../../molecules/Table/Table.jsx'
import TableEntry from '../../molecules/Table/TableEntry.jsx'
import TableHeader from '../../molecules/Table/TableHeader.jsx'
import {useDispatch, useSelector} from 'react-redux'
import DropdownMenu from "../../molecules/DropdownMenu/DropdownMenu.jsx";
import {setChosenOrdersSort} from "../../../../store/accountSlice.js";
import {useState} from "react";
import OrderView from "../../molecules/OrderView/OrderView.jsx";

const Orders = () => {
  const orders = useSelector((store) => store.accountSlice.orders)
  const chosenOrdersSort = useSelector((store) => store.accountSlice.chosenOrdersSort);

    const dispatch = useDispatch();


    const [selectedOrder, setSelectedOrder] = useState(null);

    // Funkcja obsługująca kliknięcie na zamówienie
    const handleOrderClick = (order) => {
        setSelectedOrder(order); // Ustawia kliknięte zamówienie jako wybrane
    };

    const hideDetails = () =>{
        setSelectedOrder(null);
    }
    const handleOptionSelect = (option) => {

        dispatch(setChosenOrdersSort(option));
    };

    // Filtrowanie zamówień na podstawie wybranego statusu
    const filteredOrders = orders.filter((order) => {
        switch (chosenOrdersSort) {
            case 'Paid orders':
                return order.status === "shipped";
            case 'Unpaid orders':
                return order.status === 'unpaid';
            case "Shipped orders":
                return order.status === 'shipped';
            case 'Unshipped orders':
                return order.status === 'unshipped';
            case 'Refunds':
                return order.status === 'refund'; // Możesz dodać status „refund”, jeśli go masz
            default:
                return true; // Jeżeli nie ma wybranego filtra, zwróć wszystkie zamówienia
        }
    });

  return (

    <div className={'widget'}>
      <WidgetTitleBar text={'Orders'} />
<div>
<div>
        {selectedOrder && (
            <OrderView
                id={selectedOrder.id}
                name={selectedOrder.name}
                buyer={selectedOrder.buyer}
                date={selectedOrder.date}
                status={selectedOrder.status}
                price={selectedOrder.price}
                onClick={hideDetails}
            />
        )}
    </div>
</div>

        <DropdownMenu
            title={'Orders Type' || "Select an option"}
            options={[
                "Paid orders",
                "Unpaid orders",
                "Shipped orders",
                "Unshipped orders",
                "Refunds"
            ]}
            onOptionSelect={handleOptionSelect}
            storeVariable={chosenOrdersSort}
            customWidth="30%"
        />

      <div className={'widget-content'}>
        <div>
          <div className={'widget-frame'}>

            <Table ratio={'3-2-3-2'}>
              <TableHeader content={['name', 'buyer', 'date', 'price']} />
              {filteredOrders.map((order) => (
                <TableEntry
                  key={order.id}
                  content={[
                    order.name,
                    order.buyer,
                    order.date,
                    `${order.price}$`
                  ]}
                  onClick={() => handleOrderClick(order)}
                />
              ))}
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
