
import { Circle as _Circle, CircleStyleProps, Path, DisplayObjectConfig, INode } from '@antv/g'
import PolyLine from '../cell/polyline';
import { Base } from '../base';
export default class ActiveLine extends Base {
    private canvas: any = null;
    private lastLine: any = null;
    constructor(props) {
        super(props)
        this.canvas = props?.canvas;
        this.eventListenter()
    }
    eventListenter() {
        const canvas1 = document.getElementById("canvas1")
        canvas1.addEventListener('mousedown', (event) => {
            event.stopPropagation()
        });
        canvas1.addEventListener('mousemove', (event) => {
            event.stopPropagation()
            const { cell } = ActiveLine.getLastPoint();
            const { offsetX, offsetY } = event;
            console.log(cell, '////cell');
            if (cell) {
                if (this.lastLine) {
                    this.canvas.removeChild(this.lastLine)
                }
                const { center } = cell.getBounds();
                console.log(center, 'line');
                this.lastLine = this.drawLine(center[0], center[1], offsetX, offsetY)
            }
        });
        canvas1.addEventListener('mouseup', (event) => {
            event.stopPropagation()
            console.log(this.lastLine, 'destory');
            if (this.lastLine) {
                this.canvas.removeChild(this.lastLine)
            }
            this.lastLine = null;
            ActiveLine.setLastPoint({})
        });
    }
    drawLine(startX, startY, endX, endY) {
        const polyline = new PolyLine({ canvas: ActiveLine?.getActiveLayer() });
        const _midX = startX + (endX - startX) / 2;
        const _midY = startY + (endY - startY) / 2;
        return polyline.draw({
            id: 'polyline',
            style: {
                points: [
                    [startX, startY],
                    [_midX, startY],
                    [_midX, _midY],
                    [endX, _midY],
                    [endX, endY],
                ],
                stroke: 'red',
                lineWidth: 5,
                cursor: 'pointer',
            },
        })
    }
}