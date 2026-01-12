import { startWeekDays } from "./calendar-utils";
import type { IWeekLabel } from "./types";
/**
 * Build localized + ordered week labels for calendar.
 * Auto-fallback to English default if i18n invalid.
 */
declare function useWeekLabels(i18nLabelWeek?: unknown[], weekStart?: keyof typeof startWeekDays): IWeekLabel[];
export default useWeekLabels;
