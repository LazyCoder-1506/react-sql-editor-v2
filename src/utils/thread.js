export const getHistorydByThreadId = (id, threads) => {
  const index = threads.findIndex(thread => thread.id === id)
  if (index === -1) return []
  else return threads[index].history
}