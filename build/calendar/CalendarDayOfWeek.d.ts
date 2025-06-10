import React from 'react';
import { IDayBaseProps, IWeekData, IWeekLabel } from './IFTypes';
export interface ICalendarDayOfWeeksProps extends IDayBaseProps {
    weekLabels: IWeekLabel[];
    dayOfWeeks: IWeekData[][];
    handleChangeDate: (data: IWeekData) => void;
}
declare const CalendarDayOfWeeks: React.FC<ICalendarDayOfWeeksProps>;
export default CalendarDayOfWeeks;
