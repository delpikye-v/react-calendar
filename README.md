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

+ Calendar view, selected, small...
+ Can be range date selected, read-only
+ Support customize label (i18n)...
+ Support to display the first day of the second week or Sunday
+ Etc...

---


#### Preview
![Date-Calendar](https://github.com/delpikye-v/react-calendar/blob/main/demo.png)

#### Usage

Install the package

```js
npm install --save react-calendar-z

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
      // showAnchor
      // i18nLabelWeek={labelWeekDays}
      // notBeforeTime={new Date()}           >=
      // notAfterTime={new Date(2022, 7, 12)} <=
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
  // width?: string | number;
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
  i18nLabelWeek?: IWeekLabel[];     // display customize label
  i18nLabelMonth?: string[];        // display customize label
  onSelectedValue?: (value: Date) => any;

  // customize format title
  formatTittleYearMonth?: (
    year: number,
    month: number,
    decadeData?: number[]
  ) => string | React.ReactNode;

  // support customize format day
  formartDayValue?: (day: number) => string | React.ReactNode;
```

<br />

#### Note

Rewrite...and add more (checking...)
<br />

#### RUN

<b><a href="https://codesandbox.io/u/delpi.k">LIVE EXAMPLE</a>

<br />

### License

MIT
