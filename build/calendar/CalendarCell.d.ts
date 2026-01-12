import React from "react";
export interface ICalendarCellProps {
    value: number;
    display?: string | number;
    className?: string;
    disabled?: boolean;
    isSelected?: boolean;
    neighbor?: boolean;
    tabIndex?: number;
    setSelected: (value: number) => void;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
}
declare const CalendarCell: React.ForwardRefExoticComponent<ICalendarCellProps & React.RefAttributes<HTMLDivElement>>;
export default CalendarCell;
