import WidgetTitleBar from '../../atoms/WidgetTitleBar/WidgetTitleBar.jsx'
import styles from './QualityOfSale.module.css'
import Table from '../../molecules/Table/Table.jsx'
import TableEntry from '../../molecules/Table/TableEntry.jsx'

const QualityOfSale = () => {
  return (
    <div className={'widget'}>
      <WidgetTitleBar text={'Quality of sale'} />

      <div className={'widget-content'}>
        <div className={styles['score-container']}>
          <div className={styles['widget-frame']}>
            <h3>Your Category:</h3>
            <p>4</p>
          </div>
          <div className={styles['widget-frame']}>
            <h3>Your total Score:</h3>
            <p>76/100</p>
          </div>
        </div>

        <div>
          <p className={'opaque'} style={{ marginBottom: '.2rem' }}>
            Things you might want to work on
          </p>
          <div className={styles['widget-frame']}>
            <Table ratio={'3-1'}>
              <TableEntry content={['Delivery time', '14/20']} />
              <TableEntry content={['Quality of products', '5/20']} />
              <TableEntry content={['Availability', '16/20']} />
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QualityOfSale
