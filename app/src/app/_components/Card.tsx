import styles from '@styles/card.module.scss'

type Props = {
  playlistName: string
  url: string
  image: string
};

export default function Button(props: Props) {
  return (
    <div className={styles.card}>
      <img src={props.image} alt="プレイリストのジャケット画像" />
      <p>{props.playlistName}</p>
    </div>
  );
}