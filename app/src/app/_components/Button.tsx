import styles from '@styles/button.module.scss'

type Props = {
  title?: string
  children: string
  color?:string
};

export default function Button(props: Props) {
  return (
    <div>
      <button className={styles.button}>{props.children}</button>
    </div>
  );
}