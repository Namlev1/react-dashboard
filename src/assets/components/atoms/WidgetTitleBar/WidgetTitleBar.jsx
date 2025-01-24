import styles from './WidgetTitleBar.module.css'

const WidgetTitleBar = ({ text }) => {
  return (
    <div className={styles['widget-title-bar']}>
      <h2>{text}</h2>
    </div>
  )
}

export default WidgetTitleBar
