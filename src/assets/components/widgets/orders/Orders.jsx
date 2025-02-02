import WidgetTitleBar from '../../atoms/WidgetTitleBar/WidgetTitleBar.jsx'
import Table from '../../molecules/Table/Table.jsx'
import TableEntry from '../../molecules/Table/TableEntry.jsx'
import TableHeader from '../../molecules/Table/TableHeader.jsx'
import {useDispatch, useSelector} from 'react-redux'
import DropdownMenu from "../../molecules/DropdownMenu/DropdownMenu.jsx";
import {setChosenOrdersSort} from "../../../../store/accountSlice.js";

const Orders = () => {
  const orders = useSelector((store) => store.accountSlice.orders)
    const chosenOrdersSort = useSelector((store) => store.accountSlice.chosenOrdersSort);

    const dispatch = useDispatch();


    const handleOptionSelect = (option) => {
        dispatch(setChosenOrdersSort(option));
    };


  return (
    <div className={'widget'}>
      <WidgetTitleBar text={'Orders'} />


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
        />

      <div className={'widget-content'}>
        <div>
          <div className={'widget-frame'}>
            <Table ratio={'3-2-3-2'}>
              <TableHeader content={['name', 'buyer', 'date', 'price']} />
              {orders.map((order) => (
                <TableEntry
                  key={order.id}
                  content={[
                    order.name,
                    order.buyer,
                    order.date,
                    `${order.price}$`
                  ]}
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
