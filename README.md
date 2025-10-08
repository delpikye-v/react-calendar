## ✨ react-calendar-z

**Lightweight, customizable React calendar component** supporting single and range date selection.

- No dependency on momentjs/dayjs — pure JS.
- Fully configurable week start, month/year selection, bookmarks, and localized labels.

---

[![NPM](https://img.shields.io/npm/v/react-calendar-z.svg)](https://www.npmjs.com/package/react-calendar-z)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Downloads](https://img.shields.io/npm/dt/react-calendar-z.svg)

---

### 🌟 Demo

👉 [Codesandbox](https://codesandbox.io/s/86omu9)

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
```

or

```bash
yarn add react-calendar-z
```

---

### ⚡ Quick Example

```tsx
import React, { useState } from "react";
import "react-calendar-z/build/styles.css";
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
| `maxHeightSelectMonth`     | `number \| string`                                                                  | Max height for month dropdown      |
| `maxHeightSelectYear`      | `number \| string`                                                                  | Max height for year dropdown       |
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

```bash
export interface ICalendarRef {
  /** Reset current selected date */
  resetSelectedDate: () => void;

  /** Set calendar to a specific date */
  setValue: (date: Date) => void;

  /** Get the current selected date */
  getSelectedDate: () => Date;

  /** Change current view mode (date, month, year, decade) */
  changeMode: (mode: TModeView) => void;

  /** Navigate to next/previous month */
  nextMonth: () => void;
  prevMonth: () => void;

  /** Navigate to next/previous year */
  nextYear: () => void;
  prevYear: () => void;

  /** Navigate to next/previous decade */
  nextDecade: () => void;
  prevDecade: () => void;

  /** Select a specific date, month, or year programmatically */
  selectDate: (date: Date) => void;
  selectMonth: (month: number) => void;
  selectYear: (year: number) => void;

  /** Focus the current day (today) */
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

---

### 📋 License

MIT
