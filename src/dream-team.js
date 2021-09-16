import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( m) {
    let str = [];
    if(!Array.isArray(m)) return false
    m.forEach((mem) => {
        if (typeof(mem)==='string') {
            mem = mem.trim();
            str.push(mem[0].toUpperCase())
        };
        str.sort()
    })

    return str.join('') || false
}
