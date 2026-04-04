# Dates

 
- [Dates](#dates)
  - [Get and display dates](#get-and-display-dates)
  - [International date time formatter](#international-date-time-formatter)
  - [UTC time](#utc-time)
  - [Creating BC dates](#creating-bc-dates)
  - [Adding or subtracting with dates](#adding-or-subtracting-with-dates)

[Return Home](/basics)

## Get and display dates

Get current date and display in different formats.

> Dates can fall in the range of `-271821` to `275760`

``` js
const d = new Date();
console.log('utc', d); // displays UTC time GMT+00
console.log('local', d.toLocaleString()); // displays local date and time
console.log('date', d.toLocaleDateString()); // displays local date
console.log('time', d.toLocaleTimeString()); // displays local time

console.log('year', d.getFullYear());  // displays the month day number
console.log('month number', d.getMonth());  // displays the month day number - note that Jan = 0
console.log('week day', d.getDay());  // displays the week day number, with Monday being 1
console.log('day of month', d.getDate());  // displays the month day number
console.log('hour of day', d.getHours());  // displays the hour of the day
console.log('minute of hour', d.getMinutes());  // displays the minute of the hour
console.log('second of minute', d.getSeconds());  // displays the seconds of the minute
console.log('millisecond of second', d.getMilliseconds());  // displays the milliseconds of the second

let maxEpoc = 8.64e15 // the max epoc value for a date (cannot use negative values)
console.log('Epoc max', new Date(maxEpoc).toLocaleString());  // creates a date based on epoc value (milliseconds since 1 Jan, 1970 00:00:00)

console.log('Create specific date by params', new Date(2025,4,30).toLocaleString());
console.log('Create specific date by string', new Date("2001/12/25 09:30:00").toLocaleString());
console.log('Create specific date by string and in UTC', new Date(Date.UTC(2000,4,30)).toLocaleString()); // parse local dates as UTC to ensure they are localisation safe
console.log('Create BC date', new Date("-100700",2,10,2,39));  // must pass year as "-00xxxx" or wrap year string inside Date.UTC()
console.log('Create BC min year', new Date("-271820"));
```

**[`^        back to top        ^`](#dates)**

## International date time formatter

Format using a specific locale and layout

``` js
const formatter = new Intl.DateTimeFormat(
    'en-US',
    {
        timeZone: 'america/new_york',
        // weekDay: 'short', // short, long, full
        // month: 'short', // short, long, full
        // day: '2-digit',
        // year: 'numeric',
        // hour: '2-digit',
        // minute: '2-digit',
        // second: '2-digit',
        // hour12: false, // true / false
        dateStyle: 'short', // short, long, full
        timeStyle: 'short' // short, long, full
    }
)

console.log(formatter.format( new Date())); // prints mm/dd/yy hh:mm AM/PM
```

**[`^        back to top        ^`](#dates)**

## UTC time

`new Date()` uses UTC time (or GMT 0). When you get or set a date, you must be aware of this and adjust for your time zone.

``` console
2026-04-30T14:00:00.000Z
01/05/2026, 12:00:00 am
```

``` js
// time stored in UTC
let l = new Date(2026, 4, 1);
console.log(l);
// in local time 
console.log(l.toLocaleString());

```

**[`^        back to top        ^`](#dates)**

## Creating BC dates

There can be unexpected behaviour for BC dates, so be aware of the following

``` js
console.log('❌ Create 700 AD date by year num', new Date(700).getFullYear()); //  fails with epoc 0 year (1970) WHY???
console.log('✅ Create 700 AD date by yyy, mm, dd', new Date(700,1,1).getFullYear()); // works, but WHY???
console.log('✅ Create 700 AD UTC date by year num', new Date(Date.UTC(700)).getFullYear());  // Works, but WHY???
console.log('✅ Create 700 AD date by year 3 char string', new Date("700").getFullYear()); // works as expected
console.log('✅ Create 700 AD date by padded year string', new Date("000700").getFullYear()); // works as expected
console.log("");
console.log('❌ Create -700 BC date by year num', new Date(-700).getFullYear());  // fails with epoc 0 year (1970) WHY???
console.log('✅ Create -700 BC date by yyy, mm, dd', new Date(-700,1,1).getFullYear()); // works, but WHY???
console.log('✅ Create -700 BC UTC date by year num', new Date(Date.UTC(-700)).getFullYear());  // Works, but WHY???
console.log('❌ Create -700 BC date by year 3 char string', new Date("-700").getFullYear()); // fails, with positive date returned - WHY???
console.log('✅ Create -700 BC date by year 6 char string', new Date("-000700").getFullYear()); // works with negagive year with padded 6 char string
```

**[`^        back to top        ^`](#dates)**

## Adding or subtracting with dates

Milliseconds can be added or subtrated with `setTime()` and `getTime()` to get a new calculated date.

``` js
// adding or subtracting time from a datetime object
let current = new Date();
let future = new Date();
future.setTime(future.getTime() + (4 * 60 * 60 * 1000)); // gets current time in MS add 4 hours woth of MS, then sets the total as the new time. 
console.log('now', current.toLocaleString());
console.log('then', future.toLocaleString()); // 4 hours later
```

**[`^        back to top        ^`](#dates)**
