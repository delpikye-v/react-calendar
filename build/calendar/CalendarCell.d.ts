import React from "react";
export interface ICalendarCellProps {
    value: number;
    className?: string;
    disabled?: boolean;
    display?: string | number;
    isSelected?: boolean;
    neighbor?: boolean;
    tabIndex?: number;
    setSelected: (value: number) => void;
    onKeyDown?: React.KeyboardEventHandler<HTMLSpanElement>;
}
declare const CalendarCell: React.ForwardRefExoticComponent<ICalendarCellProps & React.RefAttributes<HTMLDivElement>>;
export default CalendarCell;
