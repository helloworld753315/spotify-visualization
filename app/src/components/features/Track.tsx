import Card from '@/components/ui/Card'
import styles from '@styles/card.module.scss'

type Props = {
  trackName: string
  artist: string
  url: string
  image: string
  rate: number
}

export default function Track(props: Props) {
  return (
    <Card className={styles.track_card}>
      <div className={styles.track_content}>
        <img src={props.image} alt="トラックのジャケット画像" />
        <div className={styles.track_column}>
          <p className={styles.track_name}>{props.trackName}</p>
          <p className={styles.artist_name}>{props.artist}</p>
          <div className={styles.progress_back}>
            <div className={styles.progress_front} style={{ width: `${props.rate}%` }}></div>
          </div>
        </div>
      </div>
    </Card>
  )
}
