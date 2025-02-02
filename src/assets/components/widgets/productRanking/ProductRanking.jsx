import {useDispatch, useSelector} from 'react-redux'
import WidgetTitleBar from '../../atoms/WidgetTitleBar/WidgetTitleBar.jsx'
import Table from '../../molecules/Table/Table.jsx'
import TableHeader from '../../molecules/Table/TableHeader.jsx'
import TableEntry from '../../molecules/Table/TableEntry.jsx'
import styles from './ProductRanking.module.css'
import DropdownMenu from "../../molecules/DropdownMenu/DropdownMenu.jsx";
import {setChosenRankingSort} from "../../../../store/accountSlice.js";

const ProductRanking = () => {
  const ranking = useSelector((store) => store.accountSlice.ranking)
  const chosenOrdersSort = useSelector((store) => store.accountSlice.chosenRankingSort);
  const dispatch = useDispatch();
  const handleOptionSelect = (option) => {
      dispatch(setChosenRankingSort(option));
  };

  return (
    <div className={'widget'}>
      <WidgetTitleBar text={'Product Ranking'} />

        <DropdownMenu
            title={'Sort by' || "Select an option"}
            options={[
                "Best to worst",
                "Worst to best"
            ]}
            onOptionSelect={handleOptionSelect}
            storeVariable={chosenOrdersSort}
            customWidth="30%"
        />

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
