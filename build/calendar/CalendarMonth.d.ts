import React from 'react';
export interface ICalendarMonthProps {
    labelMonths?: string[];
    selected: number;
    isSameYear: boolean;
    year: number;
    minYearMonth: number;
    maxYearMonth: number;
    setSelected: (value: number) => any;
}
declare const CalendarMonth: React.FC<ICalendarMonthProps>;
export default CalendarMonth;
