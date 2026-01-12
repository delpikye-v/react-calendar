## 🗓️ react-calendar-z

[![NPM](https://img.shields.io/npm/v/react-calendar-z.svg)](https://www.npmjs.com/package/react-calendar-z)
![Downloads](https://img.shields.io/npm/dt/react-calendar-z.svg)

[LIVE DEMO](https://codesandbox.io/p/devbox/react-calendar-forked-y982q5)

**Lightweight, customizable React calendar component** supporting single and range date selection.

- No dependency on momentjs/dayjs — pure JS.
- Fully configurable week start, month/year selection, bookmarks, and localized labels.

---

### 🚀 Features

- **Lightweight & Fast** — no external date libraries required.
- **Customizable Week Start:** `monday`, `sunday`, `friday`, or `saturday`.
- **Range Selection** — easily limit selectable dates.
- **Month / Year / Decade Navigation**
- **Bookmarks** — mark important dates with custom classes.
- **Keyboard Accessible + ARIA roles**
- **Pure React Hook Design**
- **Fully Customizable Labels, Formats, and Locales**
- **Ref-based API** to control calendar programmatically.

---

### 📦 Installation

```bash
npm install react-calendar-z

yarn add react-calendar-z
```

---

### ⚡ Quick Example

```tsx
import React, { useState } from "react";
import "react-calendar-z/styles.css";

import Calendar from "react-calendar-z";

function App() {
  const [date, setDate] = useState(new Date(2022, 7, 10));

  return (
    <div>
      <Calendar
        value={date}
        onSelectedValue={setDate}
        // weekStart="monday"
        // showMonthYearSelection
        // focusable
      />
    </div>
  );
}

export default App;
```

---

### ⚙️ Props

| Prop                       | Type                                                                                | Description                        |
| -------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------- |
| `className`                | `string`                                                                            | CSS class for main container       |
| `todayClassName`           | `string`                                                                            | CSS class for today date           |
| `selectedClassName`        | `string`                                                                            | CSS class for selected date        |
| `neighborMonthClassName`   | `string`                                                                            | CSS class for neighbor month dates |
| `labelMonthYearClassName`  | `string`                                                                            | CSS class for month/year label     |
| `weekClassName`            | `string`                                                                            | CSS class for week row             |
| `width`                    | `string \| number`                                                                  | Calendar width                     |
| `height`                   | `string \| number`                                                                  | Calendar height                    |
| `readOnly`                 | `boolean`                                                                           | Disable date selection             |
| `isVisible`                | `boolean`                                                                           | Show or hide calendar              |
| `showAnchor`               | `boolean`                                                                           | Show anchor element                |
| `labelNext`                | `string \| React.ReactNode`                                                         | Label for next button              |
| `labelBack`                | `string \| React.ReactNode`                                                         | Label for back button              |
| `weekStart`                | `TWeekStart`                                                                        | Start day of the week              |
| `showOnlyCurrentMonthDays` | `boolean`                                                                           | Hide dates from other months       |
| `notBeforeTime`            | `Date`                                                                              | Minimum selectable date            |
| `notAfterTime`             | `Date`                                                                              | Maximum selectable date            |
| `value`                    | `Date`                                                                              | Selected date                      |
| `bookmarkDates`            | `IBookmarkDate[]`                                                                   | Highlight specific dates           |
| `focusable`                | `boolean`                                                                           | Allow keyboard focus               |
| `showToday`                | `boolean`                                                                           | Highlight today                    |
| `i18nLabelWeek`            | `IWeekLabel[] \| string[]`                                                          | Localized week labels              |
| `i18nLabelMonth`           | `string[]`                                                                          | Localized month labels             |
| `minYear`                  | `number`                                                                            | Minimum year selectable            |
| `maxYear`                  | `number`                                                                            | Maximum year selectable            |
| `minimumDayCanExceedToday` | `boolean`                                                                           | Only allow dates larger than today |
| `showMonthYearSelection`   | `boolean`                                                                           | Enable month/year selection        |
| `showNextBack`             | `boolean`                                                                           | Show next/back navigation buttons  |
| `rightNextBack`            | `boolean`                                                                           | Align navigation buttons to right  |
| `showFooter`               | `boolean`                                                                           | Show footer with selected date     |
| `showXClose`               | `boolean`                                                                           | Show close (X) button              |
| `xCloseIcon`               | `string \| React.ReactNode`                                                         | Custom close icon                  |
| `onSelectedValue`          | `(value: Date) => void`                                                             | Callback when date is selected     |
| `onChangeView`             | `(mode: TModeView) => void`                                                         | Callback when view mode changes    |
| `onClickWeekLabel`         | `(weekLabel: IWeekLabel) => void`                                                   | Callback on week label click       |
| `formatTitleYearMonth`     | `(year: number, month: number, decadeData?: number[]) => string \| React.ReactNode` | Custom format for title display    |
| `formatDayValue`           | `(day: number) => string \| React.ReactNode`                                        | Custom day display in calendar     |
| `formatSelectedDate`       | `(date: Date) => string \| React.ReactNode`                                         | Custom format for selected date    |

---

## 📘 Ref API

```ts
export interface ICalendarRef {
  resetSelectedDate: () => void;
  setValue: (date: Date) => void;
  getSelectedDate: () => Date;
  changeMode: (mode: TModeView) => void;
  nextMonth: () => void;
  prevMonth: () => void;
  nextYear: () => void;
  prevYear: () => void;
  nextDecade: () => void;
  prevDecade: () => void;
  selectDate: (date: Date) => void;
  selectMonth: (month: number) => void;
  selectYear: (year: number) => void;
  focusToday: () => void;
}
```

---

## 📷 Preview

![Date-Calendar](https://github.com/delpikye-v/react-calendar/blob/main/date.png)
![Month View](https://github.com/delpikye-v/react-calendar/blob/main/month.png)
![Year View](https://github.com/delpikye-v/react-calendar/blob/main/year.png)
![Selection](https://github.com/delpikye-v/react-calendar/blob/main/selection.png)

---

### 📋 License

MIT
