import WidgetTitleBar from '../../atoms/WidgetTitleBar/WidgetTitleBar.jsx'
import Table from '../../molecules/Table/Table.jsx'
import TableEntry from '../../molecules/Table/TableEntry.jsx'
import { useSelector } from 'react-redux'
import LikeIcon from '/src/assets/components/atoms/Icons/LikeIcon.svg'
import DislikeIcon from '/src/assets/components/atoms/Icons/DislikeIcon.svg'
import styles from './Reviews.module.css'

const Reviews = () => {
  const data = useSelector((store) => store.accountSlice.reviews)

  return (
    <div className={'widget reviews-widget'}>
      <WidgetTitleBar text={'Reviews'} />

      <div className={'widget-content'}>
        <div className={'widget-frame ' + styles['score-frame']}>
          <div>
            <p>
              {data.score}%
              <span className={styles['small-font']}> positive reviews</span>
            </p>
          </div>
          <div className={styles['score-frame-stats']}>
            <div>
              <img src={LikeIcon} alt={'Positive reviews'} />
              <p style={{ color: 'var(--like)' }}>{data.positive}</p>
            </div>
            <div>
              <img src={DislikeIcon} alt={'Negative reviews'} />
              <p style={{ color: 'var(--dislike)' }}>{data.negative}</p>
            </div>
          </div>
        </div>

        <div>
          <div className={'widget-frame ' + styles['review-table-frame']}>
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
