import moment from "moment";

export function lastUpdatedTime(timestamp: string) {
  const time = moment(timestamp);

  const today = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
  const thisWeek = moment(today).set({ weekday: 0 });

  if (time.isSameOrAfter(today)) {
    return time.format("hh:mm A");
  }

  if (time.isSameOrAfter(thisWeek)) {
    return time.format("ddd");
  }

  return time.format("MM/DD/YYYY");
}

export function msgDate(timestamp: string) {
  const time = moment(timestamp);

  const today = moment().set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
  const yesterday = moment(today).subtract(1, "day");
  const thisWeek = moment(today).set({ weekday: 0 });

  if (time.isSameOrAfter(today)) {
    return "Today";
  }

  if (time.isSameOrAfter(yesterday)) {
    return "Yesterday";
  }

  if (time.isSameOrAfter(thisWeek)) {
    return time.format("dddd");
  }

  return time.format("MM/DD/YYYY");
}

export function msgTime(timestamp: string) {
  return moment(timestamp).format("hh:mm A");
}
