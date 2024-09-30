import React from 'react';
export interface ICalendarTitleSelectionProps {
    currentDate: Date;
    minYear: number;
    maxYear: number;
    minMonth: number;
    maxMonth: number;
    valueMonth: number;
    valueYear: number;
    className?: string;
    i18nLabelMonth?: string[];
    minimumDayCanLargeThanToday?: boolean;
    handleChange: (year: number, month: number) => any;
}
/**
 * A component that renders a month and year selection interface.
 *
 * The component renders two select elements, one for month and one for year.
 * The component will animate the label change when the value of the select elements change.
 */
declare const CalendarTitleSelection: React.FC<ICalendarTitleSelectionProps>;
export default CalendarTitleSelection;
