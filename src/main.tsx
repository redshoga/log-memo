import { h, render } from 'preact';
import styles from "./main.css";

render((
  <div id="foo">
    <span className={styles.hello}>Hello, world!!</span>
    <button onClick={ e => alert("hi!") }>Click Me</button>
  </div>
), document.body);
