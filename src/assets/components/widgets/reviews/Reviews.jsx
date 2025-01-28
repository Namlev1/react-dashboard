import WidgetTitleBar from '../../atoms/WidgetTitleBar/WidgetTitleBar.jsx'
import styles from '../qualityOfSale/QualityOfSale.module.css'
import Table from '../../molecules/Table/Table.jsx'
import TableEntry from '../../molecules/Table/TableEntry.jsx'
import { useSelector } from 'react-redux'
import LikeIcon from '/src/assets/components/atoms/Icons/LikeIcon.svg'
import DislikeIcon from '/src/assets/components/atoms/Icons/DislikeIcon.svg'

const Reviews = () => {
  const data = useSelector((store) => store.accountSlice.reviews)

  return (
    <div className={'widget reviews-widget'}>
      <WidgetTitleBar text={'Reviews'} />

      <div className={'widget-content'}>
        <div className={styles['score-container']}>
          <div className={'widget-frame'}>
            <p>{data.score}</p>
          </div>
          <div></div>
        </div>

        <div>
          <div className={'widget-frame'}>
            <h3>Most recent reviews</h3>
            <Table ratio={'10-5-2-13'}>
              {data.details.map((review) => (
                <TableEntry
                  key={review.id}
                  content={[
                    review.name,
                    review.buyer,
                    {
                      isImg: true,
                      src:
                        review.rating === 'positive' ? LikeIcon : DislikeIcon,
                      alt: 'Rating icon'
                    },
                    review.comment
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

export default Reviews
