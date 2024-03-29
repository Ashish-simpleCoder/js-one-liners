export const randomBg = () => `#${Math.random().toString(16).slice(2, -6)}`

export const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random())

export const isEmptyArr = (arr) => arr.length == 0

export const getSumOfArr = (arr) => arr.reduce((acc, item) => acc += item)

export const getUniqueId = () => Date.now().toString()