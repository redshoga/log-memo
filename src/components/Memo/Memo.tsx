import { h, JSX } from 'preact';
import styles from "./Memo.css"

export type Props = {
  mode: "READONLY" | "WRITE",
  text: string
  onChange: (event: any) => void
}

export const Memo = (props: Props): JSX.Element => {
  const readonly = props.mode === "READONLY";

  return readonly ? (
    <textarea className={styles.textarea} value={props.text} readOnly={readonly} />
  ): (
    <textarea className={styles.textarea} value={props.text} onInput={props.onChange} />
  )
}
