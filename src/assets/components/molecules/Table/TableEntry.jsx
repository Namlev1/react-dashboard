import styles from './Table.module.css'

const TableEntry = ({ content, gridTemplateColumns }) => {
  return (
    <div className={styles['table-content']} style={{ gridTemplateColumns }}>
      {content.map((field, idx) => {
        if (idx === 0) {
          // don't render left border
          if (field.src) {
            return (
              <div key={field.src} className={'flex-center'}>
                <img src={field.src} alt={field.alt} />
              </div>
            )
          }
          return <p key={field}>{field}</p>
        }

        if (field.src) {
          return (
            <div
              key={field.src}
              className={'flex-center'}
              style={{ borderLeft: '1px solid var(--text)' }}
            >
              <img src={field.src} alt={field.alt} />
            </div>
          )
        }
        return (
          <p key={field} style={{ borderLeft: '1px solid var(--text)' }}>
            {field}
          </p>
        )
      })}
    </div>
  )
}

export default TableEntry
