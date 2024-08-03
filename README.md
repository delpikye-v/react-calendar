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
+ Can be range date selected, read-only
+ Support customize label (if need)
+ Support to display the first day: monday or sunday // (checking with another day...)
+ light, no use lib: momentjs, dayjs...

---


#### Preview
![Date-Calendar](https://github.com/delpikye-v/react-calendar/blob/main/date.png)

<br />

![Date-Calendar](https://github.com/delpikye-v/react-calendar/blob/main/month.png)

<br />

![Date-Calendar](https://github.com/delpikye-v/react-calendar/blob/main/year.png)

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
    const [date, setDate] = useState(new Date(2022, 7, 10));

    <Calendar
      value={date}
      onSelectedValue={setDate}
      // showToday={true}
      // showAnchor
      // i18nLabelWeek={labelWeekDays}
      // notBeforeTime={new Date()}           >=
      // notAfterTime={new Date(2022, 7, 12)} <=
      // show  => handle show hide (when hide => reset mode to weekview)
    />

```

---

#### props

see <b>index.d.ts</b>


| props                | type                          | description                                                                |
|----------------------|-------------------------------|----------------------------------------------------------------------------|

```js
  className?: string;
  todayClassName?: string;
  selectedClassName?: string;
  neighborMonthClassName?: string;
  labelMonthYearClassName?: string;
  width?: string | number;
  // height?: string | number; => if update height, please change line-height of cell
  labelNext?: string | React.ReactNode;
  labelBack?: string | React.ReactNode;
  weekStart?: "monday" | "sunday";
  notBeforeTime?: Date;             //   => for range time
  notAfterTime?: Date;              //   => for range time
  readOnly?: boolean;               // mode readOnly
  show?: boolean;                   // handle show by is
  showAnchor?: boolean;
  value?: Date;                     // selected value
  showToday?: boolean;              // default true
  fitMonthDay?: boolean;            // remove dispaly other month

  // set from name and short-name order by Sunday => Monday
  i18nLabelWeek?: IWeekLabel[];     // display customize label
  i18nLabelMonth?: string[];        // display customize label
  onSelectedValue?: (value: Date) => any;

  // customize format title
  formatTittleYearMonth?: (
    year: number,
    month: number,
    decadeData?: number[]
  ) => string | React.ReactNode;
  // => year/month !== -1 => modeview week
  // => year !== -1/month == -1 => modeview month
  // => decadeData !== underfined => modeview year

  // support customize format day
  formartDayValue?: (day: number) => string | React.ReactNode;
```

<br />

#### Note

<br />

#### RUN

<b><a href="https://codesandbox.io/u/delpi.k">LIVE EXAMPLE</a>

<br />

#### License

MIT
