import WidgetTitleBar from '../../atoms/WidgetTitleBar/WidgetTitleBar.jsx'
import Table from '../../molecules/Table/Table.jsx'
import TableEntry from '../../molecules/Table/TableEntry.jsx'
import TableHeader from '../../molecules/Table/TableHeader.jsx'
import { useSelector } from 'react-redux'
import DropdownMenu from "../../molecules/DropdownMenu/DropdownMenu.jsx";

const Orders = () => {
  const orders = useSelector((store) => store.accountSlice.orders)
  return (
    <div className={'widget'}>
      <WidgetTitleBar text={'Orders'} />


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
