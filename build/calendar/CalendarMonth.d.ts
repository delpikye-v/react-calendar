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
/**
 * CalendarMonth component
 *
 * This component renders a month selection component.
 */
declare const CalendarMonth: React.FC<ICalendarMonthProps>;
export default CalendarMonth;
