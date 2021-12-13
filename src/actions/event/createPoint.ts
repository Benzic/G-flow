
import { Circle as _Circle, CircleStyleProps, DisplayObjectConfig, Canvas, INode } from '@antv/g'
import DragFunction from '../event/drag'
import EventFunction from '../event/event'
import Point from '../cell/point';
export default class Circle {
    private canvas: Canvas = null;
    private points: any[] = [];
    constructor(canvas) {
        this.canvas = canvas
    }
    onCreatePoint(_circle, x, y) {
        const _point = new Point(_circle);
        const point = _point.draw({
            style: {
                x,
                y,
                r: 10,
                fill: '#1890FF',
                stroke: '#F04864',
                lineWidth: 4,
                shadowColor: 'black',
                shadowBlur: 20,
            }
        })
        this.points.push(point)
    }
}