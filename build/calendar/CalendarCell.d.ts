/// <reference types="react" />
export interface ICalendarCellProps {
    value: number;
    className?: string;
    disabled?: boolean;
    display?: number | string;
    isSelected?: boolean;
    neighbor?: boolean;
    setSelected: (value: number) => any;
}
/**
 * CalendarCell
 *
 * A cell in the calendar, displaying a month or year.
 *
 * @param {number} value The value of the cell.
 * @param {string} [className] The className of the cell.
 * @param {boolean} [disabled] If the cell is disabled.
 * @param {number|string} [display] What to display in the cell.
 * @param {boolean} [isSelected] If the cell is selected.
 * @param {boolean} [neighbor] If the cell is a neighbor of the current month.
 * @param {function} setSelected The function to call when the cell is selected.
 * @returns {React.ReactElement} The cell element.
 */
declare function CalendarCell({ value, className, disabled, display, isSelected, neighbor, setSelected, }: ICalendarCellProps): JSX.Element;
export default CalendarCell;
