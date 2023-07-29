import styles from "@styles/track.module.scss";

type Props = {
  trackName: string;
  artist: string;
  url: string;
  image: string;
  rate: number;
};

export default function Track(props: Props) {
  return (
    <div className={styles.track_countainer}>
      <img src={props.image} alt="トラックのジャケット画像" />
      <div className="column">
        <p className={styles.track_name}>{props.trackName}</p>
        <p className={styles.artist_name}>{props.artist}</p>
        <div className={styles.progress_back}>
          <div
            className={styles.progress_front}
            style={{ width: `${props.rate}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
