/*
 * @Author: your name
 * @Date: 2021-10-26 10:43:43
 * @LastEditTime: 2021-11-03 18:05:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-plan\src\actions\cell.ts
 */
import { Rect, Circle, Ellipse, Image, Polygon, HTML } from "./cell";
export default class Index {
    private Circle: Circle = null;
    private Rect: Rect = null;
    private Ellipse: Ellipse = null;
    private Image: Image = null;
    private Polygon: Polygon = null;
    private HTML: HTML = null;
    constructor({
        displayLayer,
        activeLayer,
    }) {
        this.Circle = new Circle({ canvas: displayLayer });
        this.Rect = new Rect({ canvas: displayLayer });
        this.Ellipse = new Ellipse({ canvas: displayLayer });
        this.Image = new Image({ canvas: displayLayer });
        this.Polygon = new Polygon({ canvas: displayLayer });
        this.HTML = new HTML({ canvas: displayLayer });
        this.initCanvas();
    }
    initCanvas() {
        // this.HTML.draw({
        //     id: "html",
        //     style: {
        //         x: 500,
        //         y: 500,
        //         width: 200,
        //         height: 200,
        //         innerHTML: '这是一行文本嘛？你是大打算阿斯蒂艾斯打算',
        //     },
        // })
        // this.Image.draw({
        //     id: "image",
        //     style: {
        //         x: 200,
        //         y: 100,
        //         width: 100,
        //         height: 100,
        //         shadowColor: 'rgba(0,0,0,0)',
        //         shadowBlur: 20,
        //         shadowOffsetX: 0,
        //         shadowOffsetY: 0,
        //         img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',
        //     },
        // })
        this.Polygon.draw({
            id: "polygon",
            style: {
                x: 200,
                y: 100,
                fill: '#1890FF',
                points: [[50, 25],
                [100, 25],
                [100 + 50 * Math.sin(Math.PI / 6), 25 + 50 * Math.cos(Math.PI / 6)],
                [100, 25 + 50 * Math.cos(Math.PI / 6) * 2],
                [50, 25 + 50 * Math.cos(Math.PI / 6) * 2],
                [50 - 50 * Math.sin(Math.PI / 6), 25 + 50 * Math.cos(Math.PI / 6)]],
                shadowColor: 'rgba(0,0,0,0)',
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                lineDash: [10, 10],
                stroke: '#F04864',
                lineWidth: 4,
            },
        })
        this.Circle.draw({
            id: "circle",
            style: {
                x: 300,
                y: 200,
                r: 50,
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
                rx: 50,
                ry: 75,
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