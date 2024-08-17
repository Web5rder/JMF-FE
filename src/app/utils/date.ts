import { DAYS_OF_WEEEK } from '../constants/common';

export const formatDate = (isoDate: any): FormatDateResult => {
  const date = new Date(isoDate);
  const weekday = date.getDay();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return {
    date: `${year}-${month}-${day}`,
    day: DAYS_OF_WEEEK[weekday],
  };
};
