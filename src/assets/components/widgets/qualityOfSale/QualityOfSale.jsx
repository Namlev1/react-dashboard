import WidgetTitleBar from '../../atoms/WidgetTitleBar/WidgetTitleBar.jsx'
import styles from './QualityOfSale.module.css'
import Table from '../../molecules/Table/Table.jsx'
import TableEntry from '../../molecules/Table/TableEntry.jsx'
import { useSelector } from 'react-redux'

const QualityOfSale = () => {
  const data = useSelector((store) => store.accountSlice.quality)

  return (
    <div className={'widget'}>
      <WidgetTitleBar text={'Quality of sale'} />

      <div className={'widget-content'}>
        <div className={styles['score-container']}>
          <div className={'widget-frame'}>
            <h3>Your Category:</h3>
            <p>{data.category}</p>
          </div>
          <div className={'widget-frame'}>
            <h3>Your total Score:</h3>
            <p>{data.score}/100</p>
          </div>
        </div>

        <div>
          <p className={'opaque'} style={{ marginBottom: '.2rem' }}>
            Things you might want to work on
          </p>

          <div className={'widget-frame'}>
            <Table ratio={'3-1'}>
              {data.details.map((detail, idx) => (
                <TableEntry
                  key={idx}
                  content={[detail.name, `${detail.score}/20`]}
                />
              ))}
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QualityOfSale
