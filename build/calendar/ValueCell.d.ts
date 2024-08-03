/// <reference types="react" />
export interface IValueCellProps {
    value: number;
    display?: number | string;
    isSelected?: boolean;
    neighbor?: boolean;
    setSelected: (value: number) => any;
}
declare function ValueCell({ value, display, isSelected, neighbor, setSelected, }: IValueCellProps): JSX.Element;
export default ValueCell;
