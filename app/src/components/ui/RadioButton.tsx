import styles from '@styles/button.module.scss'

type Props = {
  options: string[]
  selectedOption: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function RadioButtonGroup(props: Props) {
  return (
    <div className={styles.radiobutton}>
      {props.options.map((option) => (
        <label
          key={option}
          className={
            props.selectedOption === option ? `${styles.on_button}` : `${styles.off_button}`
          }
        >
          <input
            type="radio"
            value={option}
            checked={props.selectedOption === option}
            onChange={props.onChange}
          />
          {option}
        </label>
      ))}
      <div>{props.selectedOption}が選択されました！</div>
    </div>
  )
}
