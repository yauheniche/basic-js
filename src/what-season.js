import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {

   if ( date === undefined ) return 'Unable to determine the time of year!';
   if (!(date instanceof Date)) return "Invalid date!";

  return  date.getMonth()<2 || date.getMonth() ===11 ? 'winter' :
          date.getMonth()>1 && date.getMonth() < 5 ? 'spring' :
          date.getMonth()>4 && date.getMonth() < 8 ? 'summer' :
          date.getMonth()>7 && date.getMonth() < 11 ? 'fall' :  false

}
