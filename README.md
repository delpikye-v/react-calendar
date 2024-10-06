<div align="center">
    <h1>react-calendar-z</h1>
    <a href="https://www.npmjs.com/package/react-calendar-z">react-calendar-z</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/s/86omu9">LIVE EXAMPLE</a></b>
</div>

---

[![NPM](https://img.shields.io/npm/v/react-calendar-z.svg)](https://www.npmjs.com/package/react-calendar-z) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


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

| props                       | type                                                                | description                                     |
| --------------------------- | ------------------------------------------------------------------- | ----------------------------------------------- |
| className                   | string                                                              |                                                 |
| labelMonthYearClassName     | string                                                              |                                                 |
| weekClassName               | string                                                              |                                                 |
| width                       | string / number                                                     |                                                 |
| height                      | string / number                                                     |                                                 |
| labelNext                   | string / React.ReactNode                                            |                                                 |
| labelBack                   | string / React.ReactNode                                            |                                                 |
| weekStart                   | enum (`sunday` / `monday` / `friday` / `saturday`)                  |  default: `sunday`                              |
| fitMonthDay                 | boolean                                                             | `false`: display dates of other months          |
| show                        | boolean                                                             |                                                 |
| showAnchor                  | boolean                                                             |                                                 |
| value                       | Date                                                                | value selected `DATE`                           |
| i18nLabelWeek               | IWeekLabel[] / string[]: from `sunday`, `monday`... -> `saturday`   | auto mapping with `weekStart`                   |
| i18nLabelMonth              | string[]                                                            |                                                 |
| bookmarkDates               | IBookmarkDate[]                                                     | add a class to bookmark                         |
| onSelectedValue             | (value: Date) => any                                                | set selected value `DATE`                       |
| onChangeView                | (mode: TModeView) => any                                            |                                                 |
| onClickWeekLabel            | (weekLabel: IWeekLabel) => any                                      |                                                 |
| formatTittleYearMonth       | (year: number, month: number, decadeData?: number[])                | your format                                     |
| readOnly                    | boolean                                                             |                                                 |
| neighborMonthClassName      | string                                                              | the className of the date                       |
| showToday                   | boolean                                                             |                                                 |
| todayClassName              | string                                                              |                                                 |
| selectedClassName           | string                                                              |                                                 |
| formatDayValue              | (day: number) => string / React.ReactNode                           |                                                 |
| minYear                     | number                                                              | default: `currentYear` - 100                    |
| maxYear                     | number                                                              | default: `currentYear` + 100                    |
| notBeforeTime               | Date                                                                | default: `undefined`                            |
| notAfterTime                | Date                                                                | default: `undefined`                            |
| minimumDayCanLargeThanToday | boolean                                                             | false                                           |
| showMonthYearSelection      | boolean                                                             | false: display selection month year             |
| showNextBack                | boolean                                                             | false: display next back                        |
| rightNextBack               | boolean                                                             | display position next back                      |
| showFooter                  | boolean                                                             | show footer (selection date and clear status)   |
| showXClose                  | boolean                                                             | button clear status                             |
| xCloseIcon                  | string / React.ReactNode                                            | customize x-close                               |
| formatSelectedDate          | (date: Date) => string / React.ReactNode                            | format in footer (default `MMM DD, yyyy`)       |

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
