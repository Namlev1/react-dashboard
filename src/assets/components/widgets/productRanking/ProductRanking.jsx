import { useSelector } from 'react-redux'
import WidgetTitleBar from '../../atoms/WidgetTitleBar/WidgetTitleBar.jsx'
import Table from '../../molecules/Table/Table.jsx'
import TableHeader from '../../molecules/Table/TableHeader.jsx'
import TableEntry from '../../molecules/Table/TableEntry.jsx'
import styles from './ProductRanking.module.css'

const ProductRanking = () => {
  const ranking = useSelector((store) => store.accountSlice.ranking)
  return (
    <div className={'widget'}>
      <WidgetTitleBar text={'Product Ranking'} />

      <p>Todo sort select</p>
      <div className={'widget-content'}>
        <div>
          <div className={'widget-frame ' + styles['product-table']}>
            <Table ratio={'1-5-3-3'}>
              <TableHeader
                content={['photo', 'product name', 'amount sold', 'trade']}
              />
              {ranking.map((product) => (
                <TableEntry
                  key={product.id}
                  content={[
                    {
                      isImg: true,
                      src: product.photo,
                      alt: 'Product photography'
                    },
                    product.name,
                    product.amountSold,
                    `${product.return}$`
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

export default ProductRanking
