/*
 * @Author: your name
 * @Date: 2021-10-14 17:41:42
 * @LastEditTime: 2021-11-03 18:05:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \new-plan\src\base\index.ts
 */
import { Base } from '../actions/base';
import { Canvas } from '@antv/g'
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
import ResizeObserver from "resize-observer-polyfill";
import { Util } from '../actions/unti'
import Index from '../actions/index'
import CreateLine from '../actions/event/line'

export class Flow {
    public ctx: any = null;
    public _ctx: any = null;
    public canvas: any = null;
    public canvas2: any = null;
    public _canvas: any = null;
    public wrapper: any = null;
    public keyElement: any = {};
    public hoverIndex: any = null;
    public activeIndex: any = null;
    public startLine: any = null;
    public nodes: any = null;
    public lines: any = [];
    public Canvas: any = [];
    public Event: any = null;
    public Util: any = null;
    public Event2: any = null;
    public flow: any = null;
    public config: {
        gradConfig: {
            color: string,
            space: number,
            stepX: number,
            stepY: number,
            type: "point" | "line",
            width: number
        }
        canvasConfig: any

    } = null;
    // public state: any = {
    //     translateX: 0,
    //     translateY: 0
    // }
    constructor({
        canvas,
        config = {
            gradConfig: true,

        },
        nodes = [{
            x: 300, y: 300, round: 2, bgColor: "gray", cellShadow: {
                shadowBlur: "",
                shadowColor: "",
                shadowOffsetX: "",
                shadowOffsetY: ""
            }, text: "测试文本", label: { show: "normal", x: 0, y: 0 },
            width: 100, height: 30,
        },
        // { x: 600, y: 100, text: "测试文本2", round: 0, normalBgColor: "gray", activeBgColor: "red", hoverBgColor: "green", width: 100, height: 100, color: "white" },
        {
            x: 300, y: 300, text: "测试文本3", round: 2, width: 100, height: 30,
        },
        {
            x: 400, y: 400, text: "shape", width: 100, height: 50, shape: "ellipse",
        }, {
            x: 500, y: 500, text: "shape2", width: 50, height: 20, shape: "ellipse",
        },
        {
            x: 400, y: 100, text: "circle", width: 100, height: 100, shape: "circle",
        },
        {
            x: 0, y: 0, text: "shap3", width: 100, height: 80, shape: "ellipse",
        },
        {
            x: 300, y: 500, text: "测试文本4", round: 20, width: 200, height: 60,
        },
        {
            x: 400, y: 100, text: "Regular Polygon", width: 100, height: 100, sides: 4, shape: "regularPolygon",
        },
        {
            x: 400, y: 100, text: "Polygon1", width: 100, height: 100, sides: 3, shape: "regularPolygon",
        },
        {
            x: 500, y: 100, text: "regularPolygon2", width: 50, height: 50, sides: 6, shape: "regularPolygon",
        },
        {
            x: 300, y: 500, text: "测试文本4", round: 20, width: 200, height: 60
        },
        {
            x: 500, y: 600, text: "三角形", width: 200, height: 60, points: "80,0 120,80", shape: "triangle"
        },
        {
            x: 720, y: 420, text: "path", width: 100, height: 100, points: "80,0 100,60 80,100 0,100", shape: "path"
        }

        ],
        flowLines
    }: any) {
        const canvasRenderer = new CanvasRenderer();
        const canvas1 = document.getElementById("canvas1");
        this.canvas = new Canvas({
            container: canvas1,
            width: canvas1.clientWidth,
            height: canvas1.clientHeight,
            renderer: canvasRenderer,
        });
        this.observer(canvas1);
        const canvas2 = document.getElementById("canvas2");
        this.canvas2 = new Canvas({
            container: canvas2,
            width: canvas2.clientWidth,
            height: canvas2.clientHeight,
            renderer: canvasRenderer,
        });
        this.observer(canvas2);
        new CreateLine({ canvas: this.canvas2 })
        new Base({ displayLayer: this.canvas, activeLayer: this.canvas2 })
        new Index({ displayLayer: this.canvas, activeLayer: this.canvas2 })
    }
    //监听canvas外围大小变化
    observer(wrapper: HTMLElement): void {
        const resizeObserver: any = new ResizeObserver((entries: any) => {
            for (const entry of entries) {
                if (entry.target !== wrapper) {
                    return;
                }
                const { width, height } = entry.contentRect;
                this.canvas.resize(width, height);
            }
        });
        resizeObserver.observe(wrapper);
    }
}