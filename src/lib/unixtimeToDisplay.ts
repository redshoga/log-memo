const pad = (num: number, length: number): string => {
  return ('0000000000' + num).slice(-length);
}

export const unixtimeToDisplay = (unixtime: number): string => {
  const date = new Date(unixtime * 1000);
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getMonth() + 1
  const h = date.getHours()
  const min = date.getMinutes()
  const s = date.getSeconds()
  return `${y}/${pad(m, 2)}/${pad(d, 2)} ${pad(h, 2)}:${pad(min, 2)}:${pad(s, 2)}`
}
