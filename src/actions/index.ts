/*
 * @Author: your name
 * @Date: 2021-10-26 10:43:43
 * @LastEditTime: 2021-11-03 18:05:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-plan\src\actions\cell.ts
 */
import { Rect, Circle, Ellipse, Image } from "./cell";
export default class Index {
    private Circle: Circle = null;
    private Rect: Rect = null;
    private Ellipse: Ellipse = null;
    private Image: Image = null;
    constructor({
        displayLayer,
        activeLayer,
    }) {
        this.Circle = new Circle({ canvas: displayLayer });
        this.Rect = new Rect({ canvas: displayLayer });
        this.Ellipse = new Ellipse({ canvas: displayLayer });
        this.Image = new Image({ canvas: displayLayer });
        this.initCanvas();
    }
    initCanvas() {
        this.Image.draw({
            id: "image",
            style: {
                x: 200,
                y: 100,
                width: 200,
                height: 200,
                shadowColor: 'rgba(0,0,0,0)',
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
            },
        })
        this.Circle.draw({
            id: "circle",
            style: {
                x: 300,
                y: 200,
                r: 100,
                fill: '#1890FF',
                stroke: '#F04864',
                lineWidth: 4,
                shadowColor: 'rgba(0,0,0,0)',
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                lineDash: [10, 10]
            },
        })
        this.Ellipse.draw({
            id: "ellipse",
            style: {
                x: 400,
                y: 400,
                rx: 100,
                ry: 150,
                fill: '#1890FF',
                stroke: '#F04864',
                lineWidth: 4,
                shadowColor: 'rgba(0,0,0,0)',
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                lineDash: [10, 10]
            },
        })
       
        this.Rect.draw({
            id: "rect",
            style: {
                x: 200,
                y: 100,
                width: 200,
                height: 50,
                fill: '#1890FF',
                stroke: '#F04864',
                lineWidth: 4,
                radius: 8,
                shadowColor: 'rgba(0,0,0,0)',
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                lineDash: [10, 10]
            },
        })
    }
}