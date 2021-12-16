
import { DisplayObjectConfig, Circle, INode, CircleStyleProps } from '@antv/g'
import { Base } from '../base';
import { PolyLine, Path } from '.';
import { Util } from '../unti'
export default class Point extends Base {
    private canvas: INode = null;
    private parent: INode = null
    constructor(props) {
        super(props)
        this.canvas = props?.canvas
        this.parent = props?.parent
    }
    draw(props: DisplayObjectConfig<CircleStyleProps>): INode {
        const cell: INode = new Circle(props)
        this.canvas.appendChild(cell);
        this.onEventListen(cell);
        return cell
    }
    onEventListen(cell): void {
        cell.addEventListener('mouseenter', (event) => {
            event.stopPropagation()
            cell.attr('cursor', "crosshair");
        });
        cell.addEventListener('mouseup', (event) => {
            event.stopPropagation()
            const { cell: _cell, parent: _parent, localCenter, boundCenter } = Point.getLastPoint();
            if (_cell) {
                const { center: center1 } = cell.getLocalBounds();
                const { center: center2 } = cell.getBounds();
                const line = this.drawLine(boundCenter[0], boundCenter[1], center2[0], center2[1])
                Point.addLine({
                    startPoint: localCenter,
                    startParent: _parent,
                    endPoint: center1,
                    endParent: this.parent,
                    line
                })
                Point.setLastPoint({})
            }
        })
        cell.addEventListener('mouseleave', (event) => {
            event.stopPropagation()
            cell.attr('cursor', "default");
        });
        cell.addEventListener('mousedown', (event) => {
            event.stopPropagation()
            const { center: localCenter } = cell.getLocalBounds();
            const { center: boundCenter } = cell.getBounds();
            Point.setLastPoint({ cell, localCenter, boundCenter, parent: this.parent })
        });
    }
    drawLine(startX: number, startY: number, endX: number, endY: number): INode {
        if (true) {
            const path = new Path({ canvas: Point?.getActiveLayer() });
            const _midX = startX + (endX - startX) / 2;
            const _midY = startY + (endY - startY) / 2;
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
            const polyline = new PolyLine({ canvas: Point?.getActiveLayer() });
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

        // const path = new Path({ canvas: Point?.getActiveLayer() });
        // const _midX = startX + (endX - startX) / 2;
        // console.log(path);
        // return path.draw({
        //     id: 'path',
        //     style: {
        //         path: `M ${startX},${startY} C ${_midX},${startY} ${_midX},${endY} ${endX},${endY}`,
        //         stroke: 'red',
        //         lineWidth: 4,
        //         lineDash: [10, 10]
        //     },
        // })
    }
}