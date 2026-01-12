import React from "react";
export interface ICalendarMonthProps {
    focusable?: boolean;
    selected: number;
    isSameYear: boolean;
    labelMonths?: string[];
    year: number;
    minYearMonth: number;
    maxYearMonth: number;
    setSelected: (value: number) => void;
}
declare const CalendarMonth: React.FC<ICalendarMonthProps>;
export default CalendarMonth;
