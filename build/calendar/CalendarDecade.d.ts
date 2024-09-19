import React from 'react';
export interface IDecadeViewProps {
    decadeData: number[];
    selected: number;
    minYear: number;
    maxYear: number;
    setSelected: (value: number) => any;
}
/**
 * DecadeView component
 *
 * This component renders a matrix of years, grouped into rows of 3, with the
 * years in the current decade highlighted. The component takes the following
 * props:
 *
 * - `decadeData`: an array of two numbers, representing the start and end year
 *   of the decade
 * - `selected`: the currently selected year
 * - `minYear` and `maxYear`: the minimum and maximum years that can be
 *   selected
 * - `setSelected`: a callback to call when a new year is selected
 *
 * The component renders a table with the years in the decade as cells. The
 * cells are styled as follows:
 *
 * - if the year is in the current decade, it is given the class `year-cell-{year}`
 * - if the year is outside the current decade, it is given the class `year-cell-{year}`
 *   and the `neighbor` prop is set to `true`
 * - if the year is disabled (i.e. it is before `minYear` or after `maxYear`), it
 *   is given the class `year-cell-disabled`
 * - if the year is selected, it is given the class `year-cell-selected`
 *
 * The component also renders an empty cell at the start and end of each row,
 * for spacing.
 */
declare const DecadeView: React.FC<IDecadeViewProps>;
export default DecadeView;
