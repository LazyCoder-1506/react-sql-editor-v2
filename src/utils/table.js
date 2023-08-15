const getTableColumnsFromData = (data) => {
  const keys = Object.keys(data)
  const columns = []
  keys.map(key => {
    columns.push({ accessorKey: key, header: convertColumnHeaderCase(key) })
  })
  return columns
}

const convertColumnHeaderCase = (s) => {
  let ret = s
  .split("_")
  .filter(x => x.length > 0)
  .map((x) => (x.charAt(0).toUpperCase() + x.slice(1)))
  .join(" ");
  return ret
}

export { getTableColumnsFromData }