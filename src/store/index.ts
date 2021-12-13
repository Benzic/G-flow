/*
 * @Author: your name
 * @Date: 2021-10-26 10:43:43
 * @LastEditTime: 2021-11-03 18:05:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-plan\src\actions\cell.ts
 */
// export default class Base {
//     public tapPoint: any = null;
//     constructor(props) {
//         console.log(props, 'base');
//     }
//     resetTapPoint(cell) {
//         this.tapPoint = cell
//     }
// }
export const store = {
    tapPoint: null,
    resetTapPoint(cell) {
        this.tapPoint = cell;
    }
}