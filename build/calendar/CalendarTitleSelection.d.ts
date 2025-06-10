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
    maxHeightSelectMonth?: number | string;
    maxHeightSelectYear?: number | string;
    i18nLabelMonth?: string[];
    minimumDayCanLargeThanToday?: boolean;
    handleChange: (year: number, month: number) => any;
}
declare const CalendarTitleSelection: React.FC<ICalendarTitleSelectionProps>;
export default CalendarTitleSelection;
