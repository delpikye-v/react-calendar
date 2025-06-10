<div align="center">
    <h1>react-calendar-z</h1>
    <a href="https://www.npmjs.com/package/react-calendar-z">react-calendar-z</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/s/86omu9">LIVE EXAMPLE</a></b>
</div>

---

[![NPM](https://img.shields.io/npm/v/react-calendar-z.svg)](https://www.npmjs.com/package/react-calendar-z) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![downloads](https://img.shields.io/npm/dt/react-calendar.svg)


#### Description

+ Calendar view, selected, small.
+ Support to display the first day of the [week](https://en.wikipedia.org/wiki/Week): `monday`, `sunday`, `friday` or `saturday`
+ Can be range date selected. (limit date)
+ Support customize label (`if needed`)
+ Light, no use lib: momentjs, dayjs...
+ Add full all classes for all dates
+ Mode: `showMonthYearSelection`
---


#### Preview
![Date-Calendar](https://github.com/delpikye-v/react-calendar/blob/main/date.png)

<br />

![Date-Calendar](https://github.com/delpikye-v/react-calendar/blob/main/month.png)

<br />

![Date-Calendar](https://github.com/delpikye-v/react-calendar/blob/main/year.png)

<br />

![Date-Calendar](https://github.com/delpikye-v/react-calendar/blob/main/selection.png)


#### Usage

Install the package

```js
npm install react-calendar-z
```

Import the module in the place you want to use:
```js
import "react-calendar-z/build/styles.css";
import Calendar from "react-calendar-z";

```
#### Snippet
```js
    // 2022, aug 10
    const [date, setDate] = useState(new Date(2022, 7, 10));

    <Calendar
      value={date}
      onSelectedValue={setDate}
    />

```
---

#### props

see <b>index.d.ts</b>

| Prop                      | Type                                                  | Description                         |
|---------------------------|-------------------------------------------------------|-------------------------------------|
| `className`               | `string`                                              | CSS class for the main container    |
| `labelMonthYearClassName` | `string`                                              | CSS class for month-year label      |
| `weekClassName`           | `string`                                              | CSS class for week row              |
| `width`                   | `string \| number`                                    | Width of the calendar               |
| `height`                  | `string \| number`                                    | Height of the calendar              |
| `labelNext`               | `string \| React.ReactNode`                           | Label content for "next" button     |
| `labelBack`               | `string \| React.ReactNode`                           | Label content for "back" button     |
| `weekStart`               | `TWeekStart`                                          | Start day of the week               |
| `showOnlyCurrentMonthDays`| `boolean`                                             | Show only current month days (hide others) |
| `isVisible`               | `boolean`                                             | Show or hide the calendar           |
| `showAnchor`              | `boolean`                                             | Show anchor element                 |
| `value`                   | `Date`                                                | Selected date                       |
| `i18nLabelWeek`           | `IWeekLabel[] \| string[]`                            | Localized week labels               |
| `i18nLabelMonth`          | `string[]`                                            | Localized month labels              |
| `bookmarkDates`           | `IBookmarkDate[]`                                     | Dates to highlight/bookmark         |
| `showMonthYearSelection`  | `boolean`                                             | Enable month/year selection         |
| `showNextBack`            | `boolean`                                             | Show next/back navigation buttons   |
| `rightNextBack`           | `boolean`                                             | Position next/back buttons on right |
| `maxHeightSelectMonth`    | `number \| string`                                    | Max height for month dropdown       |
| `maxHeightSelectYear`     | `number \| string`                                    | Max height for year dropdown        |
| `showFooter`              | `boolean`                                             | Show footer with date and clear     |
| `showXClose`              | `boolean`                                             | Show close (X) button               |
| `xCloseIcon`              | `string \| React.ReactNode`                           | Custom close button icon            |
| `refsResetCalendar`       | `React.MutableRefObject<() => any>`                   | Ref to reset calendar method        |
| `onSelectedValue`         | `(value: Date) => any`                                | Callback when date selected         |
| `onChangeView`            | `(mode: TModeView) => any`                            | Callback on view mode change        |
| `onClickWeekLabel`        | `(weekLabel: IWeekLabel) => any`                      | Callback on week label click        |
| `formatTittleYearMonth`   | `(year: number, month: number, decadeData?: number[]) => string \| React.ReactNode` | Custom format for title display     |
| `formatSelectedDate`      | `(date: Date) => string \| React.ReactNode`           | Custom format for selected date     |

<br />

#### Note

```js
xCloseIcon: When you press x to close, it will display the currently selected date again.


IWeekLabel {
  name: string; // custom label
  shortName: string; // custom short name => display name || name
  ...
}

IBookmarkDate {
  date: date; // date bookmark
  className: string; // class bookmark
  ...
}

// describe
formatTittleYearMonth: function(year: number, month: number, decadeData?: number[]) => {
  // you can set display title calendar
}

// describe
formatDayValue: function(day: number) => {
  // you can set format date
}

// describe
`minYear` | `maxYear`: Limited years can be displayed/selected
`notBeforeTime` | `notAfterTime`: Selectable date limit

// describe
`notBeforeTime` takes precedence over `minYear`
`notAfterTime` takes precedence over `maxYear`
=> we cannot select data before or after the specified data

// describe
double click title to change mode view

// weekStart: normore: see https://en.wikipedia.org/wiki/Week
`monday`, `sunday`, `friday` or `saturday` > v2.3.1
```

<br />

#### RUN

<b><a href="https://codesandbox.io/u/delpi.k">LIVE EXAMPLE</a>

<br />

#### License

MIT
