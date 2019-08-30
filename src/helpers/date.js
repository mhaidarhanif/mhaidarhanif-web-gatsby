const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const date = {
  getDayName: () => {
    const date = new Date()
    const dayIndex = date.getDay()

    return dayNames[dayIndex]
  }
}

export default date
