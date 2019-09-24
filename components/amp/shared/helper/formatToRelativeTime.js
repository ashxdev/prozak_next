const formatedDate = time => {
  const monthStrings = [
    'січня',
    'лютого',

    'березня',
    'квітня',
    'травня',

    'червня',
    'липня',
    'серпня',

    'вересня',
    'жовтня',
    'листопада',

    'грудня',
  ]

  const evt = new Date(time)

  return `${evt.getDate()} ${monthStrings[evt.getMonth()]} ${evt.getFullYear()}`
}

const formatedHours = hoursPassed => {
  return toPlural(hoursPassed, {
    one: 'годину',
    few: 'години',
    many: 'годин',
  })
}

const formatedMinutes = minutesPassed => {
  return toPlural(minutesPassed, {
    one: 'хвилину',
    few: 'хвилини',
    many: 'хвилин',
  })
}

const formatedSeconds = (secondsPassed, showRecent) => {
  if (showRecent) return 'щойно'
  const options = {
    one: 'секунду',
    few: 'секунди',
    many: 'секунд',
  }

  return toPlural(secondsPassed, options)
}

const toPlural = (number, strings) => {
  const key = getPluralKey(number)
  const suffix = strings[key]

  return `${number} ${suffix} тому`
}

const getPluralKey = number => {
  if (number % 10 > 4 || number % 10 === 0 || (number >= 11 && number <= 14)) {
    return 'many'
  }

  if (number % 10 > 1 && number % 10 <= 4) {
    return 'few'
  }

  return 'one'
}

export default time => {
  time = parseFloat(time)

  const timePassed = Date.now() - time
  const daysPassed = Math.round(timePassed / (24 * 60 * 60 * 1000))

  if (daysPassed) {
    return formatedDate(time)
  }

  const hoursPassed = Math.round(timePassed / (60 * 60 * 1000))
  if (hoursPassed) {
    return formatedHours(hoursPassed)
  }

  const minutesPassed = Math.round(timePassed / (60 * 1000))
  if (minutesPassed) {
    return formatedMinutes(minutesPassed)
  }

  const secondsPassed = Math.round(timePassed / 1000)
  return formatedSeconds(secondsPassed, true)
}
