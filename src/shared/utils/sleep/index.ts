export const sleep = (ms = 0) => new Promise((resolve) => {
  const timer = setTimeout(() => {
    clearTimeout(timer)
    resolve(true)
  }, ms)
})
