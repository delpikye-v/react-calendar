import React from 'react';
import { IDatePickerProps } from './IFTypes';
import './styles.scss';
/**
 * Calendar component
 *
 * @param className - className for date picker container
 * @param todayClassName - className for today date
 * @param selectedClassName - className for selected date
 * @param neighborMonthClassName - className for neighbor month date
 * @param labelMonthYearClassName - className for month and year label
 * @param weekClassName - className for week label
 * @param width - width of date picker container
 * @param height - height of date picker container
 * @param readOnly - if date picker is read only
 * @param show - if date picker is visible
 * @param showAnchor - if show anchor for date picker
 * @param labelNext - label for next button
 * @param labelBack - label for back button
 * @param weekStart - first day of week, default is 'sunday'
 * @param fitMonthDay - if date picker only display month and day
 * @param notBeforeTime - minimum date
 * @param notAfterTime - maximum date
 * @param value - initial date value
 * @param bookmarkDates - bookmark dates
 * @param showToday - if show today button
 * @param i18nLabelWeek - i18n label for week
 * @param i18nLabelMonth - i18n label for month
 * @param minYear - minimum year
 * @param maxYear - maximum year
 * @param minimumDayCanLargeThanToday - if minimum date can be larger than today
 * @param showMonthYearSelection - if show month and year selection
 * @param showNextBack - if show next and back button
 * @param onSelectedValue - callback when date value changed
 * @param onChangeView - callback when view changed
 * @param onClickWeekLabel - callback when week label clicked
 * @param formatTittleYearMonth - format for month and year label
 * @param formartDayValue - format for day value
 */
declare const Calendar: React.FC<IDatePickerProps>;
export default Calendar;
