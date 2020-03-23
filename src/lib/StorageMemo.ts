export class StorageMemo {
  storage: Storage;
  prefix: string;

  constructor() {
    this.prefix = "StorageMemo:"
    this.storage = localStorage
  }

  set(key: string, text: string): void {
    this.storage.setItem(this.prefix+key, text)
  }

  get(key: string): string | null {
    return this.storage.getItem(this.prefix+key)
  }

  getUnixtime(): number {
    return Math.floor(new Date().getTime() / 1000)
  }

  getCurrent(): string {
    return this.get("current") || ""
  }

  saveCurrent(text: string): void {
    this.set("current", text)
  }

  createNew(): void {
    const currentText = this.get("current");
    if (currentText === null || currentText.trim().length === 0) return
    const previousKey = this.keyOfPrevious("current")
    if (previousKey !== null) {
      const pastText = this.get(String(previousKey))
      if (pastText === currentText) return
    }
    this.set(String(this.getUnixtime()), currentText)
  }

  getList(): number[] {
    return Object.keys(this.storage)
      .map((key) => Number(key.replace(this.prefix, "")))
      .filter((val) => !isNaN(val))
      .sort()
  }

  keyOfPrevious(unixTimeOrCurrent: number | "current"): number | null {
    const pastKeyList: number[] = this.getList()
    if (unixTimeOrCurrent === "current") {
      const retKey = pastKeyList[pastKeyList.length-1]
      return retKey === undefined ? null : retKey
    }
    const index: number = pastKeyList.indexOf(unixTimeOrCurrent);
    if (index <= 1) null
    return pastKeyList[index-1] === undefined ? null : pastKeyList[index-1]
  }

  keyOfNext(unixTimeOrCurrent: number | "current"): number | "current" | null {
    if (unixTimeOrCurrent === "current") return null
    const pastKeyList: number[] = this.getList()
    const index: number = pastKeyList.indexOf(unixTimeOrCurrent);
    if (index === -1) null
    if (pastKeyList.length === index+1) return "current"
    return pastKeyList[index+1]
  }
}
