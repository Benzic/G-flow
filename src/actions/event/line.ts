import PolyLine from '../cell/polyline';
import Path from '../cell/path'
import { Base } from '../base';
import { Util } from '../unti';
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
            if (cell) {
                if (this.lastLine) {
                    this.canvas.removeChild(this.lastLine)
                }
                const { center } = cell.getBounds();
                this.lastLine = this.drawLine(center[0], center[1], offsetX, offsetY)
            }
        });
        canvas1.addEventListener('mouseup', (event) => {
            event.stopPropagation()
            if (this.lastLine) {
                this.canvas.removeChild(this.lastLine)
            }
            this.lastLine = null;
            ActiveLine.setLastPoint({})
        });
    }
    drawLine(startX, startY, endX, endY) {
        if (true) {
            // const path = new Path({ canvas: ActiveLine?.getActiveLayer() });
            // const _midX = startX + (endX - startX) / 2;
            // return path.draw({
            //     id: 'path',
            //     style: {
            //         path: `M ${startX},${startY} C ${_midX},${startY} ${_midX},${endY} ${endX},${endY}`,
            //         stroke: 'red',
            //         lineWidth: 4,
            //         lineDash: [10, 10]
            //     },
            // })
            const path = new Path({ canvas: ActiveLine?.getActiveLayer() });
            const _fillet = Util.getFilletLine(startX, startY, endX, endY)
            console.log(_fillet);
            return path.draw({
                id: 'path',
                style: {
                    path: _fillet,
                    stroke: 'red',
                    lineWidth: 4,
                    lineDash: [10, 10]
                },
            })
        } else {
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
}