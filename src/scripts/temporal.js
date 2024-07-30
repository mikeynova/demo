import { Temporal } from "@js-temporal/polyfill";

// use Temporal.Now to get the current date and time
const temporalNow = () => {
  return {
    date: new Date(),
    instant: Temporal.Now.instant().toString(),
    plainDateISO: Temporal.Now.plainDateISO().toString(),
    plainDateTime: Temporal.Now.plainDateTimeISO().toString(),
    plainTimeISO: Temporal.Now.plainTimeISO().toString(),
    timeZoneId: Temporal.Now.timeZoneId(),
    zonedDateTimeISO: Temporal.Now.zonedDateTimeISO().toString()
  };
}
console.log(temporalNow());

// what if you wanted a date or a time at a specific location?
// PlainDate
// PlainDateTime
// PlainMonthDay
// PlainTime
// PlainYearMonth
// ZonedDateTime
const specifiedDateOrTime = () => {
  return {
    plainDate: Temporal.PlainDate.from({
      year: 2021,
      month: 1,
      day: 1
    }).toString(),
    plainDateTime: Temporal.PlainDateTime.from("2021-01-01T12:00").toString(),
    plainMonthDay: Temporal.PlainMonthDay.from("01-01").toString(),
    plainTime: Temporal.PlainTime.from("12:00").toString(),
    plainYearMonth: Temporal.PlainYearMonth.from("2021-01").toString(),
    zonedDateTime: Temporal.ZonedDateTime.from({
      year: 2021,
      month: 1,
      day: 1,
      hour: 10,
      timeZone: Temporal.Now.timeZoneId(),
    }).toString(),
  };
}
// console.log(specifiedDateOrTime());

// what if you wanted to do some computations with a date?
const computations = (date) => {
  return {
    add: date.add({ days: 1 }).toString(),
    subtract: date.subtract({ days: 1, months: 3, years: 2 }).toString()
  };
}
// console.log(computations(Temporal.PlainDate.from({
//   year: 2021,
//   month: 1,
//   day: 1,
// })));

// what if you wanted to compare two dates?
const equals = () => {
  const date1 = Temporal.Now.plainDateISO();
  const date2 = Temporal.Now.plainDateISO();
  return date1.equals(date2);
}
// console.log(equals());

const since = () => {
  const date1 = Temporal.Now.plainDateISO();
  const date2 = new Temporal.PlainDate(2024, 7, 1);
  return date1.since(date2).toString();
}
// console.log(since());

const until = () => {
  const date1 = Temporal.Now.plainDateISO();
  const date2 = new Temporal.PlainDate(2024, 8, 1);
  return date1.until(date2).toString();
};
// console.log(until());

const round = () => {
  const date = Temporal.Now.plainDateTimeISO();
  return date.round({
    smallestUnit: "hour",
    roundingMode: "ceil",
    roundingIncrement: 6,
  }).toString();
}
// console.log(round());

const compare = () => {
  const now = Temporal.Now.plainDateISO();
  const yesterday = now.subtract({ days: 1 });
  const tomorrow = now.add({ days: 1 });
  const days = [now, yesterday, tomorrow];
  const sortedDays = days.sort(Temporal.PlainDate.compare);
  return sortedDays.map((day) => day.toString());
}
// console.log(compare());

const duration = () => {
  const now = Temporal.Now.plainDateISO();
  const duration = Temporal.Duration.from({
    years: 1,
    months: 2,
    days: 3,
  });
  return {
    duration: duration.toString(),
    addDuration: now.add(duration).toString(),
    specificDuration: Temporal.Duration.from({ hours: 4 }).total("minutes"),
    total: duration.total({ unit: "minutes", relativeTo: now })
  };
};
// console.log(duration());

const calendar = () => {
  const now = Temporal.Now.plainDateISO();
  return now.withCalendar('hebrew').add({ months: 1 }).toString();
}

// console.log(calendar());
