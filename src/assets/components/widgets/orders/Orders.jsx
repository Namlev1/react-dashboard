import WidgetTitleBar from '../../atoms/WidgetTitleBar/WidgetTitleBar.jsx'
import Table from '../../molecules/Table/Table.jsx'
import TableEntry from '../../molecules/Table/TableEntry.jsx'
import TableHeader from '../../molecules/Table/TableHeader.jsx'

const Orders = () => {
  return (
    <div className={'widget'}>
      <WidgetTitleBar text={'Orders'} />

      <p>Todo sort select</p>
      <div className={'widget-content'}>
        <div>
          <div className={'widget-frame'}>
            <Table ratio={'3-2-3-2'}>
              <TableHeader content={['name', 'buyer', 'date', 'price']} />
              <TableEntry
                content={['nvidia GPU basic', 'user1', '24.01.2024', '40$']}
              />
              <TableEntry
                content={[
                  'nvidia GPU expensive',
                  'user2',
                  '03.01.2023',
                  '123$'
                ]}
              />
              <TableEntry
                content={['nvidia GPU cheap', 'user3', '12.01.2024', '36$']}
              />
              <TableEntry
                content={['nvidia GPU old', 'user4', '16.01.1996', '78$']}
              />
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
