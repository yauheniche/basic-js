import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    let el;
    let addingString; 

    let addRepeatCount;

    options.additionRepeatTimes ? addRepeatCount = options.additionRepeatTimes : addRepeatCount = 1
    console.log(1, addRepeatCount)
    
    // elem > elem + ' ' > repeat + trim > .split(' ') > join(separator)
    let addingStringEl;
    options.addition ?  addingStringEl = options.addition  + ' ' : addingStringEl =''
    console.log(2, addingStringEl)

    let addingStringElementsStringWithSpacesBetween;  
    addingStringElementsStringWithSpacesBetween = addingStringEl.repeat(addRepeatCount).trim() ;
    console.log(addingStringElementsStringWithSpacesBetween)

    let  addingStringElementsArr = addingStringElementsStringWithSpacesBetween.split(' ')
    console.log(addingStringElementsArr)
    
    addingString = addingStringElementsArr.join(options.additionSeparator)
    console.log(addingString)
    
    options.addition ? el = str + addingString  + ' ' : el = str + ' ';
    console.log(el)

    let mainElRepeatCount;
    options.repeatTimes ? mainElRepeatCount = options.repeatTimes : mainElRepeatCount = 1
    console.log( mainElRepeatCount)

    let newStr = el.repeat(mainElRepeatCount).trim() ; 
    console.log(newStr)

    let arr = newStr.split(' ') ;
    console.log(arr)
    
    let res;
    options.separator ? res = arr.join(options.separator) : res = arr.join('+');
    console.log(res)
    return res
}
