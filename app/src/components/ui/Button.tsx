import styles from '@styles/button.module.scss'

type Props = {
  title?: string
  children: string
  color?: string
  onClick?: () => void // クリックイベントを受け取るプロパティを追加
}

export default function Button(props: Props) {
  return (
    <div>
      <button
        className={styles.button}
        style={{ backgroundColor: props.color }}
        onClick={props.onClick} // クリックイベントを設定
      >
        {props.children}
      </button>
    </div>
  )
}