export function isAfter(date: Date, otherDate: Date) {
  return date.getTime() < otherDate.getTime()
}
