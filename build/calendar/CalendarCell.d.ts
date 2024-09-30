import React from 'react';
export interface ICalendarCellProps {
    value: number;
    className?: string;
    disabled?: boolean;
    display?: number | string;
    isSelected?: boolean;
    neighbor?: boolean;
    setSelected: (value: number) => any;
}
/**
 * CalendarCell
 *
 * A cell in the calendar, displaying a month or year.
 */
declare const CalendarCell: React.FC<ICalendarCellProps>;
export default CalendarCell;
