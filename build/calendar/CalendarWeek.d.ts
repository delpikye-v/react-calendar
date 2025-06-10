import React from 'react';
import { ICalendarDayOfWeeksProps } from './CalendarDayOfWeek';
import { IWeekLabel } from './IFTypes';
export interface ICalendarWeekProps extends ICalendarDayOfWeeksProps {
    weekLabels: IWeekLabel[];
    weekClassName?: string;
    onClickWeekLabel?: (weekLabel: IWeekLabel) => any;
}
declare const CalendarWeek: React.FC<ICalendarWeekProps>;
export default CalendarWeek;
