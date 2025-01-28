import styles from './Table.module.css'

const TableHeader = ({ content, gridTemplateColumns }) => {
  return (
    <div className={styles['table-header']} style={{ gridTemplateColumns }}>
      {content.map((field, idx) => {
        if (idx === 0) {
          return (
            <p className={'opaque'} key={field}>
              {field}
            </p>
          ) // don't render left border
        }
        return (
          <p key={field} style={{ borderLeft: '1px solid var(--text-opaque)' }}>
            {field}
          </p>
        )
      })}
    </div>
  )
}

export default TableHeader
