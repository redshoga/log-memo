import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { Header } from './components/Header/Header';
import { Memo } from './components/Memo/Memo';
import styles from "./main.css";
import 'sanitize.css';
import { StorageMemo } from "./lib/StorageMemo"
import { unixtimeToDisplay } from "./lib/unixtimeToDisplay"

const storageMemo = new StorageMemo();

const Main = () => {
  const [mode, setMode] = useState<"READONLY" | "WRITE">("WRITE")
  const [createdAt, setCreatedAt] = useState<string>("new")
  const [showText, setShowText] = useState<string>(storageMemo.getCurrent())
  const [showKey, setShowKey] = useState<number | "current">("current")
  const [havePrevious, setHavePrevious] = useState<boolean>(storageMemo.keyOfPrevious("current") !== null)

  const reload = (newKey: number | "current") => {
    setShowKey(newKey)
    setHavePrevious(storageMemo.keyOfPrevious(newKey) !== null)

    if (newKey === "current") {
      setMode("WRITE")
      setCreatedAt("new")
      setShowText(storageMemo.getCurrent())
    } else {
      setMode("READONLY")
      setCreatedAt(unixtimeToDisplay(newKey))
      setShowText(storageMemo.get(String(newKey))!)
    }

    // console.log({
    //   mode,
    //   createdAt,
    //   showText,
    //   showKey,
    //   havePrevious,
    // })
  }

  const clickPrevious = () => {
    const nextKey = storageMemo.keyOfPrevious(showKey)
    if (nextKey === null) return
    reload(nextKey)
  }

  const clickNext = () => {
    const nextKey = storageMemo.keyOfNext(showKey)
    if (nextKey === null) { // create new
      storageMemo.createNew()
      reload("current")
      return
    }
    reload(nextKey)
  }

  const onChange = (event: any) => {
    const newText = event.target.value
    setShowText(newText)
    storageMemo.saveCurrent(event.target.value)
  }

  return (
    <main className={styles.container}>
      <Header
        createdAt={createdAt}
        showPrevious={havePrevious}
        showNext={true}
        clickPrevious={clickPrevious}
        clickNext={clickNext}
      />
      <Memo mode={mode} text={showText} onChange={onChange} />
    </main>
  )
}

render(<Main />, document.body);
