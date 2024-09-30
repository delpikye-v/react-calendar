import React from 'react';
export interface ICalendarFooterProps {
    showXClose?: boolean;
    xCloseIcon?: string | React.ReactNode;
    showFooter?: boolean;
    selectedValue: string | React.ReactNode;
    resetSelectionValue: () => any;
}
declare const CalendarFooter: React.FC<ICalendarFooterProps>;
export default CalendarFooter;
