import React from 'react';
import { IDayBaseProps, IWeekData, IWeekLabel } from './IFTypes';
export interface ICalendarDayOfWeeksProps extends IDayBaseProps {
    weekLabels?: IWeekLabel[];
    dayOfWeeks: IWeekData[][];
    handleChangeDate: (e: IWeekData) => void;
}
/**
 * React component that renders a week header and days of the week
 *
 * This component renders a week header, with short weekday names, and
 * a component that renders the days of the week. It takes the same
 * props as CalendarDayOfWeeks, with the addition of a weekLabels prop,
 * which is an array of IWeekLabel objects. The IWeekLabel objects should
 * have a dateClassName property, which is a CSS class that will be
 * applied to each weekday cell. The IWeekLabel objects can also have a
 * keyName property, which is a unique string that will be used as the
 * key for that weekday cell. The IWeekLabel objects should also have a
 * shortName property, which is the short name of the weekday that will
 * be displayed in the week header.
 *
 * @param weekLabels the array of IWeekLabel objects
 * @param dayOfWeeks the array of IWeekData objects
 * @param readOnly whether the component is read-only
 * @param neighborMonthClassName the CSS class that will be applied to the
 *     cells of the previous and next months
 * @param showToday whether the today class should be shown
 * @param todayClassName the CSS class that will be applied to the today cell
 * @param selectedClassName the CSS class that will be applied to the selected
 *     cell
 * @param handleChangeDate a callback that will be called when a day is
 *     selected
 * @param formartDayValue a callback that will be called to format the day
 *     value
 */
declare const CalendarDayOfWeeks: React.FC<ICalendarDayOfWeeksProps>;
export default CalendarDayOfWeeks;
