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
 *
 * @param currentDate - the current date
 * @param minYear - the minimum year
 * @param maxYear - the maximum year
 * @param minMonth - the minimum month
 * @param maxMonth - the maximum month
 * @param valueMonth - the current month value
 * @param valueYear - the current year value
 * @param className - the CSS class for the component
 * @param i18nLabelMonth - the i18n label for month
 * @param minimumDayCanLargeThanToday - if the minimum date can be larger than today
 * @param handleChange - the callback when the value of the select elements change
 * @returns the rendered component
 */
declare const CalendarTitleSelection: React.FC<ICalendarTitleSelectionProps>;
export default CalendarTitleSelection;
