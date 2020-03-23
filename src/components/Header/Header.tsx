import { h, JSX } from 'preact';
import styles from "./Header.css"

export type Props = {
  createdAt: string
  clickPrevious: () => void
  clickNext: () => void
  showPrevious: boolean
  showNext: boolean
}

export const Header = (props: Props): JSX.Element => {
  const nop = () => {}

  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={props.showPrevious ? props.clickPrevious : nop}>
        {props.showPrevious && "←"}
      </div>
      <div>{props.createdAt}</div>
      <div className={styles.button} onClick={props.showNext ? props.clickNext : nop}>
        {props.showNext && "→"}
      </div>
    </div>
  )
}
