import React from "react";
import type { IDayBaseProps, IWeekData, IWeekLabel } from "./types";
export interface ICalendarDayOfWeeksProps extends IDayBaseProps {
    showOnlyCurrentMonthDays?: boolean;
    selectedWeekdayIndex: [number, number] | null;
    weekLabels: IWeekLabel[];
    dayOfWeeks: IWeekData[][];
    handleChangeDate: (data: IWeekData) => void;
    onMoveNextMonth?: (targetDate?: Date) => void;
    onMovePrevMonth?: (targetDate?: Date) => void;
    animateDirection?: "left" | "right";
}
declare const CalendarDayOfWeeks: React.FC<ICalendarDayOfWeeksProps>;
export default CalendarDayOfWeeks;
