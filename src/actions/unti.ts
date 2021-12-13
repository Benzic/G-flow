/*
 * @Author: your name
 * @Date: 2021-10-26 09:49:21
 * @LastEditTime: 2021-11-03 15:42:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-plan\src\actions\unti.ts
 */
export const Util = {
    getOffset(event) {//火狐浏览器无法直接获取offsetx\offsetY 这里兼容一下
        const target = event.target || event.srcElement,
            rect = target.getBoundingClientRect(),
            offsetX = event.clientX - rect.left,
            offsetY = event.clientY - rect.top;
        return { offsetX, offsetY }
    },
    randomRGBColor(obj): { rgb: number[], color: string } {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const key = `rgb(${r},${g},${b})`
        if (obj[key]) {
            return Util.randomRGBColor(obj)
        }
        return {
            rgb: [r, g, b],
            color: key,
        }
    },
    getPointKey(rgb, number): { rgb: number[], color: string } {
        const _rgb0 = rgb[0] - number < 0 ? rgb[0] + number : rgb[0] - number;
        const _rgb1 = rgb[1] - number < 0 ? rgb[1] + number : rgb[1] - number
        const _rgb2 = rgb[2] - number < 0 ? rgb[2] + number : rgb[2] - number
        return {
            rgb: [_rgb0, _rgb1, _rgb2],
            color: `rgb(${_rgb0},${_rgb1},${_rgb2})`
        }
    },
    getXY(margin: number[]): { x: number, x2: number, y: number, y2: number } {
        switch (margin.length) {
            case 1:
                return { x: margin[0], x2: margin[0], y: margin[0], y2: margin[0] };
            case 2:
                return { x: margin[1], x2: margin[1], y: margin[0], y2: margin[0] };
            case 3:
                return { x: margin[1], x2: margin[1], y: margin[0], y2: margin[2] };
            case 4:
                return { x: margin[3], x2: margin[1], y: margin[0], y2: margin[2] };
            default:
                return { x: 0, x2: 0, y: 0, y2: 0 };
        }
    },
    getPoints(points: string | string[][] | number[][]): string[][] | number[][] {
        let _points = []
        if (Array.isArray(points)) {
            _points = points
        } else {
            _points = points.split(" ");
            _points = _points.map((item) => {
                return item = item.split(",")
            })
        }
        return _points
    },
    getMaxMin(points: string[][] | number[][]): { maxHeight: number, maxWidth: number } {
        let maxHeight: number = 0, maxWidth: number = 0, lastHeight: number = 0, lastWidth: number = 0;
        for (let i: number = 0; i <= points?.length - 1; i++) {
            const _1Index: number = Number(points[i][0]);
            const _2Index: number = Number(points[i][1])
            const _height: number = _2Index - lastHeight;
            const _width: number = _1Index - lastWidth; //没考虑负数得情况
            if (_height !== 0) {
                maxHeight +=_height
                lastHeight = _2Index
            }
         
            if (_width > 0) {
                maxWidth += _width
                lastWidth = _1Index
            }
        }
        return { maxHeight:Math.abs(maxHeight), maxWidth:Math.abs(maxWidth) }
    }
}