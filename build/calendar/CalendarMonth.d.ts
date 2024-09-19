import React from 'react';
export interface ICalendarMonthProps {
    labelMonths: string[];
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
 *
 * @param labelMonths - i18n label for month
 * @param selected - selected month value
 * @param isSameYear - if selected month is in the same year with the current year
 * @param year - current year
 * @param minYearMonth - minimum year-month value
 * @param maxYearMonth - maximum year-month value
 * @param setSelected - callback when selected month value changed
 */
declare const CalendarMonth: React.FC<ICalendarMonthProps>;
export default CalendarMonth;
