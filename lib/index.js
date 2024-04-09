export const randomBgHex = () => `#${Math.random().toString(16).slice(2, -6)}`

export const randomNumbInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const shuffleArray = (arr) => [...arr].sort(() => 0.5 - Math.random())

export const isEmptyArr = (arr) => arr.length == 0

export const getSumOfArr = (arr) => arr.reduce((acc, item) => acc += item)

export const getCurrentTimeStamp = () => Date.now().toString()