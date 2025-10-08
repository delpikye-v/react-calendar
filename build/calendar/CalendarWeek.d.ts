import React from "react";
import { type ICalendarDayOfWeeksProps } from "./CalendarDayOfWeek";
import type { IWeekLabel } from "./types";
export interface ICalendarWeekProps extends ICalendarDayOfWeeksProps {
    showOnlyCurrentMonthDays?: boolean;
    weekLabels: IWeekLabel[];
    weekClassName?: string;
    focusable?: boolean;
    onClickWeekLabel?: (weekLabel: IWeekLabel) => void;
    onMoveNextMonth?: () => void;
    onMovePrevMonth?: () => void;
}
declare const CalendarWeek: React.FC<ICalendarWeekProps>;
export default CalendarWeek;
