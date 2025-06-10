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
declare const CalendarCell: React.FC<ICalendarCellProps>;
export default CalendarCell;
